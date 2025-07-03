import { useContext, useState, useEffect, memo } from 'react'
import { Context } from '../../Provider'
import storage from '@sswahn/storage'
import database from '@sswahn/database'
import ArrowToBarLeftIcon from '../Icons/ArrowToBarLeftIcon/ArrowToBarLeftIcon'
import ArrowLeftIcon from '../Icons/ArrowLeftIcon/ArrowLeftIcon'
import ArrowLeftRightIcon from '../Icons/ArrowLeftRightIcon/ArrowLeftRightIcon'
import ArrowRightIcon from '../Icons/ArrowRightIcon/ArrowRightIcon'
import ArrowToBarRightIcon from '../Icons/ArrowToBarRightIcon/ArrowToBarRightIcon'
import ResetIcon from '../Icons/ResetIcon/ResetIcon'
import SepiaIcon from '../Icons/SepiaIcon/SepiaIcon'
import GrayscaleIcon from '../Icons/GrayscaleIcon/GrayscaleIcon'
import InvertIcon from '../Icons/InvertIcon/InvertIcon'
import ContrastIcon from '../Icons/ContrastIcon/ContrastIcon'
import ScissorsIcon from '../Icons/ScissorsIcon/ScissorsIcon'
import SwatchbookIcon from '../Icons/SwatchbookIcon/SwatchbookIcon'
import ScrewdriverWrenchIcon from '../Icons/ScrewdriverWrenchIcon/ScrewdriverWrenchIcon'
import BorderAllIcon from '../Icons/BorderAllIcon/BorderAllIcon'
import BorderLeftIcon from '../Icons/BorderLeftIcon/BorderLeftIcon'
import BorderTopIcon from '../Icons/BorderTopIcon/BorderTopIcon'
import BorderRightIcon from '../Icons/BorderRightIcon/BorderRightIcon'
import BorderBottomIcon from '../Icons/BorderBottomIcon/BorderBottomIcon'

const MediaEditor = memo(({ index, type, mediaEditorRef }) => {
  const [context, dispatch] = useContext(Context)
  const [editorStyles, setEditorStyles] = useState([])
  const [editorType, setEditorType] = useState([])
  const [saturate, setSaturate] = useState('100')
  const [brightness, setBrightness] = useState('100')
  //const [hasBorder, setHasBorder] = useState(false)
  const [activeMenu, setActiveMenu] = useState(undefined)
  
  const db = database()
  
  const handleRestFilters = event => {
    setSaturate('100')
    setBrightness('100')
    const styles = [ ...editorStyles ]
    styles[index] = { ...styles[index], filter: 'none' }
    dispatch({ type: editorType, payload: styles })
    storage.local.set(editorType, styles)
  }
  
  const handleFilter = event => {
    const filter = event.currentTarget.id
    const value = filter === 'contrast' ? '200%' : '100%'
    const styles = [ ...editorStyles ]
    styles[index] = { ...styles[index], filter: `${filter}(${value})`  } 
    dispatch({ type: editorType, payload: styles })
    storage.local.set(editorType, styles)
  }
  
  const handleFilterSaturate = event => { // can just use a variable for filter: f === 'brightness' ? 'brightness' : 'saturate'
    const value = event.target.value
    let styles = [ ...editorStyles ]
    let currentFilter = styles[index].filter === 'none' ? '' : styles[index].filter
    if (currentFilter.includes('saturate')) {
      const saturateRegex = /saturate\([\d.]+%\)/g
      currentFilter = currentFilter.replace(saturateRegex, '').trim()
    }
    const saturateFilter = `saturate(${value}%)`
    const combinedFilter = `${currentFilter} ${saturateFilter}`.trim()
    styles[index] = { ...styles[index], filter: combinedFilter }
    setSaturate(value)
    dispatch({ type: editorType, payload: styles })
    storage.local.set(editorType, styles)
  }


  useEffect(() => {
    const filters = storage.local.get('image_editor_styles')[0].filter

    //console.log('filters from storage: ', filters[0].filter)
    
    if (filters.includes('brightness')) {
      const value = filters.split('brightness(').at(-1)//.slice(0, 1)

      console.log('brightness value: ', value)
      
      setBrightness(value)
    }    
  }, [brightness])
  
  
  const handleFilterBrightness = event => {
    const value = event.target.value
    let styles = [ ...editorStyles ]
    let currentFilter = styles[index].filter === 'none' ? '' : styles[index].filter
    if (currentFilter.includes('brightness')) {
      const brightnessRegex = /brightness\([\d.]+%\)/g
      currentFilter = currentFilter.replace(brightnessRegex, '').trim()
    }
    const brightnessFilter = `brightness(${value}%)`
    const combinedFilter = `${currentFilter} ${brightnessFilter}`.trim()
    styles[index] = { ...styles[index], filter: combinedFilter }
    setBrightness(value)
    dispatch({ type: editorType, payload: styles })
    storage.local.set(editorType, styles) 
  }
  
  const handleSetBorder = event => {
    const border = editorStyles[index].border === 'none' ? '10px solid gray' : 'none'
    let styles = [ ...editorStyles ]
    styles[index] = { ...styles[index], border }
    dispatch({ type: editorType, payload: styles })
    storage.local.set(editorType, styles)
  }
  
  const handleActiveMenu = event => {
    const menu = `${event.currentTarget.id}-menu` 
    setActiveMenu(prevState =>  prevState === menu ? undefined  : menu)
  }
  
  
  const swap = (item, direction) => {
    const idx = Number(index)
    const item1 = item[idx]
    const item2 = direction === 'swap-left' ? item[idx - 1] : item[idx + 1] 
    return item.with(idx - 1, item1).with(idx, item2)
  }
  
  /* // try this again:
  
  const swap = (item, direction) => {
    const idx = Number(index)
    
    if (direction === 'swap-left' || direction === 'swap-right') {
      const item1 = item[idx]
      const item2 = direction === 'swap-left' ? item[idx - 1] : item[idx + 1] 
      return item.with(idx - 1, item1).with(idx, item2)
    } else {
      ///// swap to end:
      const makeFirst = [item[idx], ...item.filter((_, i) => i !== idx)] 
      const makeLast = [...item.filter((_, i) => i !== idx), item[idx]]
      return direction === 'swap-first' ? makeFirst : makeLast 
    }
  }
  */
  
  const swapVideo = direction => {
    if (direction === 'swap-left' && !context.video[Number(index) - 1] || direction === 'swap-right' && !context.video[Number(index) + 1]) {
      return alert("Can't go any futher.")
    }
    const video = swap(context.video, direction)
    const duration =  swap(context.video_duration, direction)
    dispatch({ type: 'video', payload: video }) 
    dispatch({ type: 'video_duration', payload: duration })
    db.put({ id: 'video', video, duration })
    
    const captions = swap(context.video_captions, direction)
    dispatch({ type: 'video_captions', payload: captions })
    storage.local.set('video_captions', captions)
    
    const editorStyles = swap(context.video_editor_styles, direction)
    dispatch({ type: 'video_editor_styles', payload: editorStyles })
    storage.local.set('video_editor_styles', editorStyles)
    
    const captionStyles = swap(context.video_caption_styles, direction)
    dispatch({ type: 'video_caption_styles', payload: captionStyles })
    storage.local.set('video_caption_styles', captionStyles)
  }
  
  const swapImages = direction => {
    if (direction === 'swap-left' && !context.images[Number(index) - 1] || direction === 'swap-right' && !context.images[Number(index) + 1]) {
      return alert("Can't go any futher.")
    }
    const images = swap(context.images, direction)
    dispatch({ type: 'images', payload: images }) 
    db.put({ id: 'images', images })
    
    const captions = swap(context.image_captions, direction)
    dispatch({ type: 'image_captions', payload: captions })
    storage.local.set('image_captions', captions)
    
    const editorStyles = swap(context.image_editor_styles, direction)
    dispatch({ type: 'image_editor_styles', payload: editorStyles })
    storage.local.set('image_editor_styles', editorStyles)
    
    const captionStyles = swap(context.image_caption_styles, direction)
    dispatch({ type: 'image_caption_styles', payload: captionStyles })
    storage.local.set('image_caption_styles', captionStyles)
  }
  
  const handleSwap = event => {
    const direction = event.currentTarget.id
    return type === 'video' ? swapVideo(direction) : swapImages(direction)
  }
  
  const swapToEnd = (item, direction) => {
    const idx = Number(index)
    const makeFirst = [item[idx], ...item.filter((_, i) => i !== idx)] 
    const makeLast = [...item.filter((_, i) => i !== idx), item[idx]]
    return direction === 'swap-first' ? makeFirst : makeLast 
  }
  
  const swapVideoToEnd = direction => {
    const video = swapToEnd(context.video, direction)
    const duration =  swapToEnd(context.video_duration, direction) 
    dispatch({ type: 'video', payload: video }) 
    dispatch({ type: 'video_duration', payload: duration })
    db.put({ id: 'video', video, duration })
    
    const captions = swapToEnd(context.video_captions, direction)
    dispatch({ type: 'video_captions', payload: captions })
    storage.local.set('video_captions', captions)
    
    const editorStyles = swapToEnd(context.video_editor_styles, direction)
    dispatch({ type: 'video_editor_styles', payload: editorStyles })
    storage.local.set('video_editor_styles', editorStyles)
    
    const captionStyles = swapToEnd(context.video_caption_styles, direction)
    dispatch({ type: 'video_caption_styles', payload: captionStyles })
    storage.local.set('video_caption_styles', captionStyles)
  }
  
  const swapImagesToEnd = direction => {
    const images = swapToEnd(context.images, direction)
    dispatch({ type: 'images', payload: images }) 
    db.put({ id: 'images', images })
    
    const captions = swapToEnd(context.image_captions, direction)
    dispatch({ type: 'image_captions', payload: captions })
    storage.local.set('image_captions', captions)
    
    const editorStyles = swapToEnd(context.image_editor_styles, direction)
    dispatch({ type: 'image_editor_styles', payload: editorStyles })
    storage.local.set('image_editor_styles', editorStyles)
    
    const captionStyles = swapToEnd(context.image_caption_styles, direction)
    dispatch({ type: 'image_caption_styles', payload: captionStyles })
    storage.local.set('image_caption_styles', captionStyles)
  }
  
  const handleSwapToEnd = event => {
    const direction = event.currentTarget.id
    return type === 'video' ? swapVideoToEnd(direction) : swapImagesToEnd(direction)
  }
  
  useEffect(() => {
    setEditorStyles(type === 'video' ? context.video_editor_styles : context.image_editor_styles)
    setEditorType(type === 'video' ? 'video_editor_styles' : 'image_editor_styles')
  }, [type, context.video_editor_styles, context.image_editor_styles])
  
  return (
    <div className="media-editor" ref={mediaEditorRef}>
      <div>
        <button id="edit-selection" onClick={handleActiveMenu} type="button" aria-label="edit a selection" aria-controls="selection-menu">
          <ScissorsIcon />
        </button>
        <button id="swap-segment" onClick={handleActiveMenu} type="button" aria-label="move current media item" aria-controls="swap-segment-menu">
          <ArrowLeftRightIcon />
          {/* how about tooltips for these? */}
        </button>
        <button id="filters" onClick={handleActiveMenu} type="button" aria-label="add a filter" aria-controls="filters-menu">
          <SwatchbookIcon />
        </button>
        <button id="borders" onClick={handleActiveMenu} type="button" aria-label="add borders" aria-controls="borders-menu">
          <BorderAllIcon />
        </button> 
        <button id="tools" onClick={handleActiveMenu} type="button" aria-label="editor tools" aria-controls="tools-menu">
          <ScrewdriverWrenchIcon />
        </button>
      </div>
      <div>
        <div id="swap-segment-menu" className="swap-segment-menu" style={{ display: activeMenu === 'swap-segment-menu' ? 'flex' : 'none' }}>
          <button id="swap-first" onClick={handleSwapToEnd} type="button">
            <ArrowToBarLeftIcon />
          </button>
          <button id="swap-left" onClick={handleSwap} type="button">
            <ArrowLeftIcon />
          </button>
          <button id="swap-right" onClick={handleSwap} type="button">
            <ArrowRightIcon />
          </button>
          <button id="swap-last" onClick={handleSwapToEnd} type="button">
            <ArrowToBarRightIcon />
          </button>
        </div>
        <div id="filters-menu" className="filters-menu" style={{ display: activeMenu === 'filters-menu' ? 'block' : 'none' }}>
          <button type="button" onClick={handleRestFilters}>
            <ResetIcon />
            <span>Reset</span>
          </button>
          <button id="sepia" type="button" onClick={handleFilter}>
            <SepiaIcon />
            <span>Sepia</span>
          </button>
          <button id="grayscale" type="button" onClick={handleFilter}>
            <GrayscaleIcon /> {/* questionable icon */}
            <span>Grayscale</span>
          </button>
          <button id="invert" type="button" onClick={handleFilter}>
            <InvertIcon /> {/* this icon is no good */}
            <span>Invert</span>
          </button>
          <button id="contrast" type="button" onClick={handleFilter}>
            <ContrastIcon /> {/* this icon is questionable */}
            <span>Contrast</span>
          </button>
          <div>
            <input id="saturation" type="range" min="5" max="100" value={saturate} onChange={handleFilterSaturate} />
            <label htmlFor="saturation">Saturation</label>
          </div>
          <div>
            <input id="brightness" type="range" min="20" max="200" value={brightness} onChange={handleFilterBrightness} />
            <label htmlFor="brightness">Brightness</label>
          </div>
        </div>
        
        <div id="borders-menu" className="borders-menu" style={{ display: activeMenu === 'borders-menu' ? 'block' : 'none' }}>
          <button id="border-left" type="button" onClick={handleSetBorder}>
            <BorderLeftIcon />
          </button>
          <button id="border-top" type="button" onClick={handleSetBorder}>
            <BorderTopIcon />
          </button>
          <button id="border-right" type="button" onClick={handleSetBorder}>
            <BorderRightIcon />
          </button>
          <button id="border-bottom" type="button" onClick={handleSetBorder}>
            <BorderBottomIcon />
          </button>
          <button id="border-outer" type="button" onClick={handleSetBorder}>
            border outer
          </button>
        </div>
      </div>
    </div>
  )
})

export default MediaEditor
