import LogIn from "../NavBar/LogIn"
import './Modal.css'

type ModalProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ setOpenModal }: ModalProps) => {

    return (
        <div className="modal-background">
            <div className="modal-container">
                <LogIn setOpenModal={setOpenModal} />
            </div>
        </div>
    )
}

export default Modal