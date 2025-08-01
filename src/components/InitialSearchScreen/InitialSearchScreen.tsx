import './InitialSearchScreen.css'
import search_icon from '../../assets/search.png'
import { AutoCompleteResponse } from '../../api/AutoComplete'


type InitalSearchScreen = {
    city: string
    setCity: React.Dispatch<React.SetStateAction<string>>
    citiesSuggestions: AutoCompleteResponse | null
    setInputCompleted: React.Dispatch<React.SetStateAction<boolean>>
    showAutoComplete: boolean
}

const InitialSearchScreen = ({ city, setCity, citiesSuggestions, setInputCompleted, showAutoComplete }: InitalSearchScreen) => {


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
            <div className="loading">
                <div className="rain-container">
                    <div className='rain-drop rain-drop-animation rain-drop-animation-slowly'></div>
                    <div className='rain-drop rain-drop-animation rain-drop-animation-slow'></div>
                    <div className='rain-drop rain-drop-animation rain-drop-animation-fast'></div>
                    <div className='rain-drop rain-drop-animation rain-drop-animation-slowly'></div>
                    <div className='rain-drop rain-drop-animation rain-drop-animation-faster'></div>
                    <div className='rain-drop rain-drop-animation rain-drop-animation-slow'></div>
                    <div className='rain-drop rain-drop-animation rain-drop-animation-fast'></div>
                </div>
                <img src="../src/assets/cloud.png" alt="" className='icon-loading icon-loading-animation' />
                <div className="search-bar-initial search-bar-animation">
                    <div className="input-wrapper-initial">
                        <input type="text" placeholder='Search' value={city} onKeyDown={handleSearch} onChange={handleChange} />
                        {
                            showAutoComplete ?
                                <div className='autocomplete-container-initial' data-testid="autocomplete-container">
                                    {citiesSuggestions ?
                                        citiesSuggestions.map((city) =>
                                            <div className='autocomplete-city-initial' onClick={() => onClickHandle(city.address.name)} data-testid="autocomplete-city-suggestion-initial">
                                                {city.address.name} {city.address.state}
                                            </div>)
                                        :
                                        <div className='wait-cities-to-load' data-testid="wait-cities-to-load">

                                        </div>}

                                </div>
                                : null
                        }
                    </div>

                    <button onClick={() => {
                        setInputCompleted(true)
                    }} aria-label='search-button'>
                        <img src={search_icon} alt="" className='weather-icon' />
                    </button>
                </div>

            </div>
        </>
    )
}

export default InitialSearchScreen


