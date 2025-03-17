import { useContext, useState, useEffect, useRef } from 'react'
import { Context } from '../../Provider'
import storage from '@sswahn/storage'
import database from '@sswahn/database'
import Dropdown from '../Dropdown/Dropdown'
import MediaEditor from '../MediaEditor/MediaEditor'
import CaptionInput from '../CaptionInput/CaptionInput'
import CircleXIcon from '../Icons/CircleXIcon/CircleXIcon'
import CircleCheckIcon from '../Icons/CircleCheckIcon/CircleCheckIcon'
import CommentIcon from '../Icons/CommentIcon/CommentIcon'
import PenToSquareIcon from '../Icons/PenToSquareIcon/PenToSquareIcon'
import SlidersIcon from '../Icons/SlidersIcon/SlidersIcon'

const Menu = ({ type, index, setIndex, closeModal }) => {
  const [context, dispatch] = useContext(Context)
  const [displayMenu, setDisplayMenu] = useState(false)
  const [displayEditor, setDisplayEditor] = useState(false)
  const [displayCaptionInput, setDisplayCaptionInput] = useState(false)
  const mediaEditorRef = useRef(null)
  const captionInputContainerRef = useRef(null)
  const captionInputRef = useRef(null) 
  const db = database() 
  
  const dropdownOptions = [
    {icon: SlidersIcon, label: 'Open editor', onClick: handleDisplayEditor},
    {icon: CommentIcon, label: 'Add a caption', onClick: handleDisplayCaptionInput},
    {icon: CircleCheckIcon, label: 'Save', onClick: handleSave},
    {icon: CircleXIcon, label: 'Delete', onClick: handleDiscard}
  ]
  
  const handlePreviewMenu = event => {
    setDisplayMenu(prevState => !prevState)
  }
  
  const handleDisplayEditor = event => {
    setDisplayMenu(false)
    setDisplayEditor(prevState => !prevState)
  }
  
  const handleDisplayCaptionInput = event => {
    event.stopPropagation()
    setDisplayMenu(false)
    setDisplayCaptionInput(prevState => !prevState)
  }
  
  const handleSave = event => {
    setIndex(0)
    setDisplayMenu(false)
    setDisplayCaptionInput(false)
    setDisplayEditor(false)
    closeModal()
  }
  
  const deleteImage = () => {
    const images = context.images.filter(item => item !== context.images[index])
    const captions = context.image_captions.filter(caption => caption !== context.image_captions[index])
    storage.local.set('image_captions', captions)
    dispatch({ type: 'images', payload: images }) 
    db.put({ id: 'images', images })
    
    setDisplayMenu(false)
    setDisplayCaptionInput(false)
    setDisplayEditor(false)
    if (images.length < 1) {
      setIndex(0)
      closeModal()
    }
  }
  
  const deleteVideo = () => {
    const video = context.video.filter(video => video !== context.video[index])
    const captions = context.video_captions.filter(caption => caption !== context.video_captions[index])
    const duration = context.video_duration.filter((_, i) => i !== Number(index))
    storage.local.set('video_captions', captions)
    dispatch({ type: 'video', payload: video }) 
    dispatch({ type: 'video_duration', payload: duration }) 
    db.put({ id: 'video', video, duration })

    setDisplayMenu(false)
    setDisplayCaptionInput(false)
    setDisplayEditor(false)
    if (video.length < 1) {
      setIndex(0)
      closeModal()
    }
  }
  
  const handleDiscard = event => {
    if (confirm('Permanently delete this file?')) {
      return type === 'video' ? deleteVideo() : deleteImage()
    }
  }

  const handleCloseMenu = event => {
    if (mediaEditorRef.current && !mediaEditorRef.current.contains(event.target)) {
      setDisplayEditor(false)
    }
    if (captionInputContainerRef.current && !captionInputContainerRef.current.contains(event.target)) {
      setDisplayCaptionInput(false) 
    }
  }
  
  useEffect(() => {
    document.addEventListener('click', handleCloseMenu)
    return () => {
      document.removeEventListener('click', handleCloseMenu)
    }
  }, [])
  
  return (
    <>
      <Dropdown
        className="icon-btn-alt caption-btn dropdown-menu"
        icon={PenToSquareIcon}
        text="Select an option"
        options={dropdownOptions}
      />
      {displayEditor && (
        <MediaEditor 
          index={index} 
          type={type} 
          mediaEditorRef={mediaEditorRef} 
        />
      )}
      {displayCaptionInput && (
        <CaptionInput 
          index={index} 
          type={type} 
          captionInputContainerRef={captionInputContainerRef} 
          captionInputRef={captionInputRef} 
        />
      )}
    </>
  )
}

export default Menu
