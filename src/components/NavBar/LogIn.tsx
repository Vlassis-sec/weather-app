import './LogIn.css'


type LogInProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
const LogIn = ({ setOpenModal }: LogInProps) => {
    const exitModal = () => {
        setOpenModal(false)
    }
    return (

        <div className="loginForm">
            <div className="header-logIn">
                <div className="formTitle">
                    Welcome back
                </div>
            </div>
            <form action="" className='form-logIn'>
                <div className="emailSection-login">
                    <input type="text" placeholder='Email' className='emailInput' required />
                </div>
                <div className="passwordSection-login">
                    <input type="text" placeholder='Password' className='passwordInput' />
                    <a href='' className='forgot-password-link'>Forgot your password?</a>
                    <div className='remember-me'>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                </div>
            </form>
            <div className="footer-logIn">
                <button onClick={exitModal} className='logInButton'>Log in</button>
            </div>
        </div>
    )
}

export default LogIn
