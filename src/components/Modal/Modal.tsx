import { useEffect } from 'react'
import './Modal.css'
import { createPortal } from "react-dom"

type ModalProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactElement | null
}

const Modal = ({ setOpenModal, children }: ModalProps) => {


    useEffect(() => {

        const escapeClose = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpenModal(false)
            }
        }

        document.addEventListener('keydown', escapeClose)

        return () => {
            document.removeEventListener('keydown', escapeClose)
        }
    }, [setOpenModal])


    return (
        createPortal(
            <div className="modal-background" role='presentation' onClick={() => setOpenModal(false)}>
                <div className="modal-container" role='dialog' aria-modal='true' onClick={(event) => { event.stopPropagation() }}>
                    {children}
                </div>
            </div>,
            document.body
        )
    )
}

export default Modal


