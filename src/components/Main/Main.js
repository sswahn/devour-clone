import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Modal from '../Modal/Modal'
import database from '@sswahn/database'

const Main = () => {
  const [context, dispatch] = useContext(Context)
  const [data, setData] = useState([])
  const db = database()

  const loadData = async () => {

    console.log('loading data from indexedDB.')
    
    const images = await db.get('images')
    const video = await db.get('video')

    console.log('images: ', images)
    console.log('video: ', video)
    
    setData([{
      id: 1,
      username: 'sswahn',
      location: 'Chiang Mai',
      images,
      video
    }])
  }
  
  const handleCloseModal = event => {
    dispatch({ type: 'modal', payload: { isOpen: false, content: <></> } })
  }

  useEffect(() => {
    loadData()
  }, [])
      
  return (
    <main>
      {data.length && data.map(item =>
        <div key={item.id} className="card" aria-label="">
          <div className="card-header">{/* username, location */}</div>
          <div className="card-content">{item.image}</div>
          <div className="card-actions"></div>
        </div>
      }
      <Modal className="camera-modal" open={context.modal.isOpen} onClose={handleCloseModal}>
        {context.modal.content}
      </Modal>
    </main>
  )
}

export default Main
