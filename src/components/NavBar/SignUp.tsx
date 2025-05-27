import { SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import './SignUp.css'
type SignUpProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

type SignUpFields = {
    email: string;
    password: string;
    confirmPassword: string;
}
const SignUp = ({ setOpenModal }: SignUpProps) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<SignUpFields>()
    const [submitLoading, setSubmitLoading] = useState(false)



    const onSubmit: SubmitHandler<SignUpFields> = () => {
        console.log("Users data sould be sent to a back-end server")
        setSubmitLoading(true)
        setTimeout(() => {
            setOpenModal(false)
        }, 1000)


    }
    return (
        <div className="signUpForm">
            <div className="header-signUp">
                <div className="form-title-signUp">
                    Sign Up
                </div>
            </div>
            <form action="" className="form-signUp" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Email" className="emailInput-signUp"
                    {...register("email", {
                        required: "Email is required",
                        validate: value => {
                            if (!/^[a-z0-9._%+-]+@[a-z0-9._%+-]+\.[a-z]{2,4}$/g.test(value)) {
                                return "Email is invalid"
                            }

                            return true
                        }
                    })} />
                {errors.email && <div>{errors.email.message}</div>}
                <input type="password" placeholder="Password" className="passwordInput-signUp"
                    {...register("password", {
                        required: "Password is required",
                        validate: value => {
                            if (!value.match(/(?=.*?[?><!@#$%^&*(){}])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[\w>!@#$%^&*(){}]{8,}/g) || value.length < 8) {
                                return "Please use at least 8 characters \nand Include uppercase, lowercase, number, \nand special character."
                            }
                            return true
                        }
                    })} />

                {errors.password && <pre>{errors.password.message}</pre>}
                <input type="password" placeholder="Confirm Password" className="confirm-password"
                    {...register("confirmPassword", {
                        required: "Required field",
                        validate: (value) => {
                            if (watch("password") != value) {
                                return "Password is not the same"
                            }
                            return true
                        }

                    })} />
                {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
                <div className="signUp-submision">
                    <button type='submit' className="signUpButton">
                        {submitLoading ? "Loading..." : "Sign up"}
                    </button>
                </div>
            </form>

        </div>
    )
}

export default SignUp
