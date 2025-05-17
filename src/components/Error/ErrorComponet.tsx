import './Error.css'
import drizzle_icon from "../../assets/drizzle.png"

type ErrorProps = {
    status: number;
    message: string;
}

const ErrorComponent = ({ status, message }: ErrorProps) => {

    return (
        <div className="weather-container">
            <img src={drizzle_icon} alt="" />
            <div className="error-message">
                <span>Oops! </span>
                <span>Error: {status} </span>
                <div> {message}</div>
                <div className='instruction'> Please refresh.</div>
            </div>
        </div>
    )
}

export default ErrorComponent