
import './Weather.css'
// import '../DummyComp/AutoComplete.css'
import { Weather } from '../../api/Weather'
import search_icon from "../../assets/search.png"
import wind_icon from '../../assets/wind.png'
import humidity_icon from '../../assets/humidity.png'
import getIcon from '../../utilities/getIcon';
import { AutoCompleteResponse } from '../../api/AutoComplete'

type WeatherProps = {
    city: string;
    setCity: React.Dispatch<React.SetStateAction<string>>
    weatherData: Weather
    citiesSuggestions: AutoCompleteResponse | null
    inputCompleted: boolean
    setInputCompleted: React.Dispatch<React.SetStateAction<boolean>>
    showAutoComplete: boolean
    // setCitySuggestions: React.Dispatch<React.SetStateAction<AutoCompleteResponse | null>>
}

const WeatherCard = ({ city, setCity, weatherData, citiesSuggestions, inputCompleted, setInputCompleted, showAutoComplete }: WeatherProps) => {

    // const myCities = ["Athens", "London", "New York", "Thessaloniki", "Texas"]
    const weatherIcon = getIcon(weatherData?.weather[0].icon)

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
                                <div className='autocomplete-container'>
                                    {citiesSuggestions ? citiesSuggestions.map((city) =>
                                        <div className='autocomplete-city' onClick={() => onClickHandle(city.address.name)}>
                                            {city.address.name} {city.address.state}
                                        </div>) : null}
                                </div>
                                :
                                null
                        }
                    </div>

                    <button onClick={() => {
                        setInputCompleted(true)
                    }}>
                        <img src={search_icon} alt="" />
                    </button>
                </div>

                <img src={weatherIcon} alt="" className="weather-icon" />
                <p className="temperature">{weatherData ? Math.floor(weatherData.main.temp) : undefined}°C</p>
                <p className="location">{weatherData ? weatherData.name : undefined}</p>
                <div className="weather-data">
                    <div className="col">
                        <img src={humidity_icon} alt="" />
                        <div>
                            <p>{weatherData ? weatherData.main.humidity : undefined} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind_icon} alt="" />
                        <div>
                            <p>{weatherData ? weatherData.wind.speed : undefined} Km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCard