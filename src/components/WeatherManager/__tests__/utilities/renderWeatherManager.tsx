import { render } from '@testing-library/react'
import WeatherManager from '../../WeatherManager'

const renderWeatherManager = (overides = {}) => {

    const props = {
        city: "",
        setCity: () => { },
        weatherData: null,
        error: null,
        loading: false,
        citySuggestions: null,
        setCitySuggestions: () => { },
        inputCompleted: false,
        setInputCompleted: () => { },
        ...overides

    }

    return render(<WeatherManager {...props} />)
}

export default renderWeatherManager
