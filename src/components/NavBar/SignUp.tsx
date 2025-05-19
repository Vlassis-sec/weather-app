
type SignUpProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
const SignUp = ({ setOpenModal }: SignUpProps) => {

    const exitModal = () => {
        setOpenModal(false)
    }
    return (
        <form action="">
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='Confirm Password' />
            <button onClick={exitModal}>Submit</button>
        </form>
    )
}

export default SignUp
