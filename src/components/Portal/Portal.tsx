import { createPortal } from "react-dom"
import Modal from "../Modal/Modal"

type PortalProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Portal = ({ setOpenModal }: PortalProps) => {

    return (
        createPortal(
            <Modal setOpenModal={setOpenModal} />, document.body
        )
    )
}

export default Portal