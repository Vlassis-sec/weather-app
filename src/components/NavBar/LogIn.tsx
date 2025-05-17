import './LogIn.css'


type LogInProps = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}
const LogIn = ({ setOpenModal }: LogInProps) => {
    const exitModal = () => {
        setOpenModal(false)
    }
    return (
        <form action="" className='form'>
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <button onClick={exitModal}>Submit</button>
        </form>
    )
}

export default LogIn
