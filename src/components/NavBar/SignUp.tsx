import './SignUp.css'
type SignUpProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
const SignUp = ({ setOpenModal }: SignUpProps) => {

    const exitModal = () => {
        setOpenModal(false)
    }
    return (
        <div className="signUpForm">
            <div className="header-signUp">
                <div className="form-title-signUp">
                    Sign Up
                </div>
            </div>
            <form action="" className="form-signUp">
                <input type="text" placeholder="Email" className="emailInput-signUp" />
                <input type="password" placeholder="Password" className="passwordInput-signUp" />
                <input type="password" placeholder="Confirm Password" className="confirm-password" />
            </form>
            <div className="footer-signUp">
                <button onClick={exitModal} type='submit' className="signUpButton">Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp
