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

      <Modal className="camera-modal" open={context.modal.isOpen} onClose={handleCloseModal}>
        {context.modal.content}
      </Modal>
    </main>
  )
}

export default Main
