import { useContext, useState, useEffect, memo } from 'react'
import { Context } from '../../Provider'
import storage from '@sswahn/storage'
import Emoji from '../Emoji/Emoji'
import AlignCenterIcon from '../Icons/AlignCenterIcon/AlignCenterIcon'
import AlignLeftIcon from '../Icons/AlignLeftIcon/AlignLeftIcon'
import AlignRightIcon from '../Icons/AlignRightIcon/AlignRightIcon'
import BoldIcon from '../Icons/BoldIcon/BoldIcon'
import ItalicIcon from '../Icons/ItalicIcon/ItalicIcon'
import FaceSmileIcon from '../Icons/FaceSmileIcon/FaceSmileIcon'
import PaletteIcon from '../Icons/PaletteIcon/PaletteIcon'
import UnderlineIcon from '../Icons/UnderlineIcon/UnderlineIcon'
import TextHeightIcon from '../Icons/TextHeightIcon/TextHeightIcon'

const CaptionInput = memo(({ index, type, captionInputContainerRef, captionInputRef }) => {
  const [context, dispatch] = useContext(Context)
  const [captionStyles, setCaptionStyles] = useState([])
  const [captionType, setCaptionType] = useState('')
  const [showHashTagSuggestions, setShowHashTagSuggestions] = useState(false)
  const [showMentionSuggestions, setShowMentionSuggestions] = useState(false)
  const [activeMenu, setActiveMenu] = useState(undefined)
  const [error, setError] = useState(undefined)
  
  const handleActiveMenu = event => {
    const menu = `${event.currentTarget.id}-menu` 
    setActiveMenu(prevState =>  prevState === menu ? undefined  : menu)
  }
  
    // remember to limit theses:
  const findHashTags = value => {
    const hashTag = value.match(/#[\p{L}\p{N}_]+/gu)?.at(-1)
    const hashTagHasEnded = hashTag ? value[value.lastIndexOf(hashTag) + hashTag.length] === ' ' : false
    hashTag && !hashTagHasEnded ? setShowHashTagSuggestions(true) : setShowHashTagSuggestions(false)
    return value
  }
  
  const handleHashTagSuggestion = () => {
    // replace input hash with selected suggestion
  }
  
  const findMentions = value => {
    const mention = value.match(/@[\p{L}\p{N}_]+/gu)?.at(-1)
    const mentionHasEnded = mention ? value[value.lastIndexOf(mention) + mention.length] === ' ' : false
    mention && !mentionHasEnded ? setShowMentionSuggestions(true) : setShowMentionSuggestions(false)
    return value
  }
  
  const handleMentionsSuggestion = () => {
    // replace input mention with selected suggestion
    // something like:
    //const newCap = caption[index].replace(metions.at(-1), mentionSuggestion)
    // so need to store mentions, and mentionSuggetions
  }
  
  const onChange = event => {
    const captions = type === 'video' ? context.video_captions : context.image_captions
    const captionsType = type === 'video' ? 'video_captions' : 'image_captions'
    const captionsArr = [ ...captions ]
    captionsArr[index] = findMentions(findHashTags(captionInputRef.current.value))
    dispatch({ type: captionsType, payload: captionsArr })
    storage.local.set(captionsType, captionsArr)
  }
  
  const handleInsertEmoji = event => {
    const emoji = event.target.textContent
    captionInputRef.current.value += emoji
    onChange()
  }
  
  const handleFontWeightChange = event => {
    const styles = [ ...captionStyles ]
    styles[index] = { ...styles[index], fontWeight: styles[index].fontWeight === 'normal' ? 'bold' : 'normal' } // these functions can be combined use a function with a switch statement
    dispatch({ type: captionType, payload: styles })
    storage.local.set(captionType, styles)
  }

  const handleFontStyleChange = event => {
    const styles = [ ...captionStyles ]
    styles[index] = { ...styles[index], fontStyle: styles[index].fontStyle === 'normal' ? 'italic' : 'normal' }
    dispatch({ type: captionType, payload: styles })
    storage.local.set(captionType, styles)
  }
  
  const handleTextDecorationChange = event => {
    const styles = [ ...captionStyles ]
    styles[index] = { ...styles[index], textDecoration: styles[index].textDecoration === 'none' ? 'underline' : 'none' }
    dispatch({ type: captionType, payload: styles })
    storage.local.set(captionType, styles)
  }

  const handleFontSizeChange = event => {
    const styles = [ ...captionStyles ]
    styles[index] = { ...styles[index], fontSize: parseInt(event.target.value) }
    dispatch({ type: captionType, payload: styles })
    storage.local.set(captionType, styles)
  }

  const handleTextAlignChange = event => {
    const styles = [ ...captionStyles ]
    styles[index] = { ...styles[index], textAlign: event.currentTarget.id }
    dispatch({ type: captionType, payload: styles })
    storage.local.set(captionType, styles)
  }

  const handleFontColorChange = event => {
    const styles = [ ...captionStyles ]
    styles[index] = { ...styles[index], fontColor: event.target.value }
    dispatch({ type: captionType, payload: styles })
    storage.local.set(captionType, styles)
  }

  const handleStrokeChange = event => {
    const styles = [ ...captionStyles ]
    styles[index] = { ...styles[index], stroke: styles[index].stroke === 0 ? 1 : 0 }
    dispatch({ type: captionType, payload: styles })
    storage.local.set(captionType, styles)
  }

  const handleStrokeColorChange = event => {
    const styles = [ ...captionStyles ]
    styles[index] = { ...styles[index], strokeColor: event.target.value }
    dispatch({ type: captionType, payload: styles })
    storage.local.set(captionType, styles)
  }
  
  const displayAlignment = () => {
    if (captionStyles[index] !== undefined) {
      switch (captionStyles[index].textAlign) {
        case 'left':
          return AlignLeftIcon
        case 'center':
          return AlignCenterIcon
        case 'right':
          return AlignRightIcon
        default: 
          return AlignLeftIcon
      } 
    } else {
      return AlignLeftIcon
    }
  }

  const handleOnInput = event => {
    setError(undefined)
  }

  const handleOnInvalid = ({ target }) => {
    setError(target.validationMessage)
  }
  
  useEffect(() => {
    setCaptionStyles(type === 'video' ? context.video_caption_styles : context.image_caption_styles)
    setCaptionType(type === 'video' ? 'video_caption_styles' : 'image_caption_styles')
  }, [type, context.video_caption_styles, context.image_caption_styles])

  return (
    <div className="caption-wrapper" ref={captionInputContainerRef}>
      <div className="caption-container">
        <input
          id="caption-input"
          className="caption-input"
          type="text"
          placeholder="Add a caption"
          autoComplete="off"
          maxLength="150"
          ref={captionInputRef}
          value={type === 'video' ? context.video_captions[index] || '' : context.image_captions[index] || ''}
          onChange={onChange}
          onInput={handleOnInput}
          onInvalid={handleOnInvalid}
          aria-label="add a caption" />
        <div className="caption-header" role="toolbar">
          <button 
            id="strong" 
            onClick={handleFontWeightChange}
            type="button" 
            style={{ background: captionStyles[index]?.fontWeight === 'bold' ? 'rgba(255, 255, 255, 0.1)' : 'none' }}
            aria-label="bold button"
            aria-description="Make caption text bold"
            aria-pressed={captionStyles[index]?.fontWeight === 'bold' || false}>
            <BoldIcon />
          </button>  
          <button 
            id="em" 
            onClick={handleFontStyleChange}
            type="button" 
            style={{ background: captionStyles[index]?.fontStyle === 'italic' ? 'rgba(255, 255, 255, 0.1)' : 'none' }}
            aria-label="italic button"
            aria-description="Make caption text italic"
            aria-pressed={captionStyles[index]?.fontStyle === 'italic' || false}>
            <ItalicIcon />
          </button>  
          <button 
            id="u" 
            onClick={handleTextDecorationChange}
            type="button" 
            style={{ background: captionStyles[index]?.textDecoration === 'underline' ? 'rgba(255, 255, 255, 0.1)' : 'none' }}
            aria-label="underline button"
            aria-description="Make caption text underlined"
            aria-pressed={captionStyles[index]?.textDecoration === 'underline' || false}>
            <UnderlineIcon />
          </button>  
          <button id="font-size" onClick={handleActiveMenu} type="button" aria-label="change text height" aria-controls="font-size-menu">
            <TextHeightIcon />
          </button>
          <button id="text-align" onClick={handleActiveMenu} type="button" aria-label="change text alignment" aria-controls="text-align-menu">
            <AlignLeftIcon />
          </button>
          <button id="color" onClick={handleActiveMenu} type="button" aria-label="change font color" aria-controls="color-menu">
            <PaletteIcon />
          </button>
          <button id="emoji" onClick={handleActiveMenu} type="button" aria-label="add an emoji" aria-controls="emoji-menu">
            <FaceSmileIcon />
          </button>
        </div>
        <div id="font-size-menu" className="font-size-menu" style={{ display: activeMenu === 'font-size-menu' ? 'block' : 'none' }} aria-label="text height">
          <label htmlFor="font-size-slider">Font size:</label>
          <input 
            id="font-size-slider"
            type="range" 
            min="14" 
            max="50" 
            value={captionStyles[index]?.fontSize || 14} 
            onChange={handleFontSizeChange} 
            role="slider" 
            aria-label="adjust font size" 
            aria-valuemin="14" 
            aria-valuemax="50" 
            aria-valuenow={captionStyles[index]?.fontSize || 14} />
          <span>{captionStyles[index]?.fontSize || 14}px</span>
        </div>
        <div id="text-align-menu" className="text-align-menu" style={{ display: activeMenu === 'text-align-menu' ? 'block' : 'none' }}>
          <label>Text alignment:</label>
          <button 
            id="left" 
            onClick={handleTextAlignChange} 
            type="button" 
            style={{ background: captionStyles[index] && captionStyles[index].textAlign === 'left' ? '#ccc' : 'white' }}
            aria-label="align left" 
            aria-selected={captionStyles[index] && captionStyles[index].textAlign === 'left'}>
            <AlignLeftIcon />
          </button>
          <button 
            id="center" 
            onClick={handleTextAlignChange} 
            type="button" 
            style={{ background: captionStyles[index] && captionStyles[index].textAlign === 'center' ? '#ccc' : 'white' }}
            aria-label="align center" 
            aria-selected={captionStyles[index] && captionStyles[index].textAlign === 'center'}>
            <AlignCenterIcon />
          </button>
          <button 
            id="right" 
            onClick={handleTextAlignChange}
            type="button" 
            style={{ background: captionStyles[index] && captionStyles[index].textAlign === 'right' ? '#ccc' : 'white' }}
            aria-label="align right" 
            aria-selected={captionStyles[index] && captionStyles[index].textAlign === 'right'}>
            <AlignRightIcon />
          </button>
        </div>
        <div id="color-menu" className="color-menu" style={{ display: activeMenu === 'color-menu' ? 'block' : 'none' }}>
          <div>
            <label htmlFor="font-color-input">Font color:</label>
            <input id="font-color-input" type="color" value={captionStyles[index]?.fontColor || '#ffffff'} onChange={handleFontColorChange} />
          </div>
          <div>
            <label htmlFor="add-stroke-checkbox">Add a stroke:</label>
            <input id="add-stroke-checkbox" type="checkbox" onChange={handleStrokeChange} checked={captionStyles[index]?.stroke || 0} aria-checked={captionStyles[index]?.stroke || 0} />
          </div>
          <div>
            <label htmlFor="stroke-color-input">Stroke color:</label>
            <input id="stroke-color-input" type="color" value={captionStyles[index]?.strokeColor || '#000000'} onChange={handleStrokeColorChange} />
          </div>
        </div>
        <div id="emoji-menu" className="caption-emoji-menu" style={{ display: activeMenu === 'emoji-menu' ? 'block' : 'none' }}>
          <Emoji insertEmoji={handleInsertEmoji} />
        </div>
        
        {showHashTagSuggestions && (
          <div className="caption-suggestions">
            <div>
              <div>#hashtag</div>
            </div>
            <div>
              <div>#hashtag</div>
            </div>
            <div>
              <div>#hashtag</div>
            </div>
            <div>
              <div>#hashtag</div>
            </div>
          </div>
        )}
        {showMentionSuggestions && (
          <div className="caption-suggestions">
            <div>
              <div>avatar</div>
              <div>username</div>
            </div>
            <div>
              <div>avatar</div>
              <div>username</div>
            </div>
            <div>
              <div>avatar</div>
              <div>username</div>
            </div>
            <div>
              <div>avatar</div>
              <div>username</div>
            </div>
          </div>
        )}
      </div>
      {error && <div className="input-error">{error}</div>}
    </div>
  )
})

export default CaptionInput
