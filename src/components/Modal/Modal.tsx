
import './Modal.css'
import { createPortal } from "react-dom"

type ModalProps = {
    // setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    children: React.ReactElement | null
}

const Modal = ({ children }: ModalProps) => {

    return (
        createPortal(
            <div className="modal-background">
                <div className="modal-container">
                    {children}
                </div>
            </div>,
            document.body
        )
    )
}

export default Modal


// make a function for the event
// useEffect(() => {
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'escape') {
//             setOpenModal(false)
//         }
//     })

//     return () => {
//         document.removeEventListener('keydown', (event) => {
//             if (event.keyCode === 27) {
//                 setOpenModal(false)
//             }
//         })
//     }
// }, [setOpenModal])

// const closeModal = (event) => {
//     event.StopPropagation()
//     setOpenModal(false)
// }