import React from 'react'
import './NavBar.css'


type NavBarProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
const NavBar = ({ setOpenModal }: NavBarProps) => {

    const openLogIn = () => {
        setOpenModal(true)
    }

    const openSignUp = () => {
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