import { useContext } from 'react'
import { Context } from '../../Provider'

const Main = () => {
  const [context, dispatch] = useContext(Context)
  const [modal, setModal] = useState({ isOpen: false, content: <></> }) 
    // modal must be handled in provider not in state so it can be used across components

  const handleCloseModal = event => {
    setModal({ isOpen: false, content: <></> })
  }
  
  return (
    <main>

      <Modal className="camera-modal" open={modal.isOpen} onClose={handleCloseModal}>
        {modal.content}
      </Modal>
    </main>
  )
}

export default Main
