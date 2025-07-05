import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Modal from '../Modal/Modal'
import database from '@sswahn/database'

const Main = () => {
  const [context, dispatch] = useContext(Context)
  const [data, setData] = useState([])

 const [image, setImage] = useState(null)
  
  const db = database()

  
  const loadData = async () => {

    console.log('in <Main />, loading data from indexedDB.')
    
    const images = await db.get('images')
    const video = await db.get('video')

    console.log('images: ', images)
    console.log('video: ', video)
    
    setData([{
      id: 1,
      username: 'sswahn',
      location: 'Chiang Mai',
      images: images.images.map(x => URL.createObjectURL(x)),
      video
    }])
  }
  
  const handleCloseModal = event => {
    dispatch({ type: 'modal', payload: { isOpen: false, content: <></> } })
  }

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    setImage(context.test_image)
  }, [context.test_image])
      
  return (
    <main>
      {!!data.length && data.map((item, index) =>
        <div key={item.id} className="list" aria-label="">
          <div className="list-header">{/* username, location */}</div>
          <div className="list-content">
            {/*!!item.images.length && */ image ? <img className="media-item" src={URL.createObjectURL(image) 
              // item.images[index]
            } alt={'some image'} /> : <></>}
          </div>
          <div className="list-actions"></div>
        </div>
      )}
      <Modal className="camera-modal" open={context.modal.isOpen} onClose={handleCloseModal}>
        {context.modal.content}
      </Modal>
    </main>
  )
}

export default Main
