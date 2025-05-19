import React from 'react'
import './NavBar.css'
import { FormType } from '../Modal/ModalTypeUnion'


type NavBarProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    setFormType: React.Dispatch<React.SetStateAction<FormType>>
}
const NavBar = ({ setOpenModal, setFormType }: NavBarProps) => {

    const openLogIn = () => {
        setFormType('log-in')
        setOpenModal(true)
    }

    const openSignUp = () => {
        setFormType('sign-up')
        setOpenModal(true)
    }
    return (
        <div className={"navbar"}>
            <button onClick={openLogIn}>Log In</button>
            <button onClick={openSignUp}>Sign Up</button>
        </div>
    )
}


export default NavBar