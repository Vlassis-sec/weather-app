import './LogIn.css'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'

type LogInProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
type FormFields = {
    email: string;
    password: string;
}
const LogIn = ({ setOpenModal }: LogInProps) => {
    const [sumbitLoading, setSubmitLoading] = useState(false)
    const { register, handleSubmit } = useForm<FormFields>()


    const onSubmit: SubmitHandler<FormFields> = () => {
        console.log("Log-in data should be the same with the sign-up form data")
        setSubmitLoading(true)

        setTimeout(() => {
            setOpenModal(false)
        }, 1000)

    }
    return (

        <div className="loginForm">
            <div className="header-logIn">
                <div className="formTitle">
                    Welcome back
                </div>
            </div>
            <form action="" className='form-logIn' onSubmit={handleSubmit(onSubmit)}>
                <div className="emailSection-login">
                    <input type="text"
                        placeholder='Email'
                        className='emailInput'
                        {...register("email", {
                            required: true
                        })} />
                </div>
                <div className="passwordSection-login">
                    <input type="password" placeholder='Password' className='passwordInput' {...register("password", {
                        required: true,
                        minLength: 8,
                    })} />
                    <a href='' className='forgot-password-link'>Forgot your password?</a>
                    <div className='remember-me'>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                </div>
                <div className="logIn-submition">
                    <button type='submit' className='logInButton'>
                        {sumbitLoading ? "Loading..." : "Log in"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LogIn
