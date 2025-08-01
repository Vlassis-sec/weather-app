
import './Weather.css'
import { Weather } from '../../api/Weather'
import search_icon from "../../assets/search.png"
import wind_icon from '../../assets/wind.png'
import humidity_icon from '../../assets/humidity.png'
import getIcon from '../../utilities/getIcon';
import getIconDescription from '../../utilities/getIconDescription'
import { AutoCompleteResponse } from '../../api/AutoComplete'

type WeatherProps = {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>
    weatherData: Weather,
    citiesSuggestions: AutoCompleteResponse | null
    setInputCompleted: React.Dispatch<React.SetStateAction<boolean>>
    showAutoComplete: boolean
}

const WeatherCard = ({ city, setCity, weatherData, citiesSuggestions, setInputCompleted, showAutoComplete }: WeatherProps) => {

    const weatherIcon = getIcon(weatherData.weather[0].icon)
    const weatherIconDescription = getIconDescription(weatherData.weather[0].icon)

    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSearch = (e) => {
        if (e.key === 'Enter' && city?.trim().length > 0) {
            setInputCompleted(true)
        }
    }

    const onClickHandle = (searchTerm: string) => {
        setCity(searchTerm)
        setInputCompleted(true)

    }

    return (
        <>
            <div className="weather">
                <div className="search-bar">
                    <div className='input-wrapper'>
                        <input type="text" placeholder="Search" value={city} onKeyDown={handleSearch} onChange={handleChange}></input>
                        {
                            showAutoComplete ?
                                <div className='autocomplete-container' data-testid="autocomplete-container">
                                    {citiesSuggestions ? citiesSuggestions.map((city) =>
                                        <div className='autocomplete-city' onClick={() => onClickHandle(city.address.name)} data-testid="autocomplete-city-suggestion">
                                            {city.address.name} {city.address.state}
                                        </div>) : <div className='wait-cities-to-load' data-testid="wait-cities-to-load">

                                    </div>}
                                </div>
                                :
                                null
                        }
                    </div>

                    <button onClick={() => {
                        setInputCompleted(true)
                    }} aria-label='search-button'>
                        <img src={search_icon} alt="" />
                    </button>
                </div>

                <img src={weatherIcon} alt={weatherIconDescription} className="weather-icon" />
                <p className="temperature">{Math.floor(weatherData.main.temp)}°C</p>
                <p className="location">{weatherData.name}</p>
                <div className="weather-data">
                    <div className="col">
                        <img src={humidity_icon} alt="humidity-icon" />
                        <div>
                            <p>{weatherData.main.humidity} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind_icon} alt="wind-icon" />
                        <div>
                            <p>{weatherData.wind.speed} Km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard