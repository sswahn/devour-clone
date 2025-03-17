import { useContext } from 'react'
import { Context } from '../../Provider'
import Modal from '../Modal/Modal'

const Main = () => {
  const [context, dispatch] = useContext(Context)

  const handleCloseModal = event => {
    dispatch({ type: 'modal', payload: { isOpen: false, content: <></> } })
  }
  
  return (
    <main>
      <div className="card" aria-label="">  {/* break card out into its own component and reuse */}
        <div className="card-header"></div>
        <div className="card-content"></div>
        <div className="card-actions"></div>
      </div>
      
      <Modal className="camera-modal" open={context.modal.isOpen} onClose={handleCloseModal}>
        {context.modal.content}
      </Modal>
    </main>
  )
}

export default Main
