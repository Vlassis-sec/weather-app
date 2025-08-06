// import React from "react";
import { useState, useEffect } from "react";
import { Weather } from "../../api/Weather"
// import { getWeather } from "../../api/getWeather"
import InitialSearchScreen from "../InitialSearchScreen/InitialSearchScreen";
import ErrorComponent from "../Error/ErrorComponet";
import CircleLoading from "../CircleLoading/CircleLoading";
import { ApiError } from "../../utilities/ApiError";
import WeatherCard from "../WeatherCard/Weather";
import { AutoCompleteResponse } from "../../api/AutoComplete";

type WeatherManagerProps = {
    city: string
    setCity: React.Dispatch<React.SetStateAction<string>>
    weatherData: Weather | null
    error: ApiError | null
    loading: boolean
    citySuggestions: AutoCompleteResponse | null
    setCitySuggestions: React.Dispatch<React.SetStateAction<AutoCompleteResponse | null>>
    inputCompleted: boolean
    setInputCompleted: React.Dispatch<React.SetStateAction<boolean>>
}
const WeatherManager = ({ city, setCity, weatherData, error, loading, citySuggestions, setCitySuggestions, inputCompleted, setInputCompleted }: WeatherManagerProps) => {
    const [showAutoComplete, setShowAutoComplete] = useState(false)

    useEffect(() => {
        if (inputCompleted === false) {
            setShowAutoComplete(true)
        } else if (inputCompleted) {
            setShowAutoComplete(false)
            setCity("")
            setInputCompleted(false)
            setCitySuggestions(null)
            // Derived ShowAutoComplete state -> showAutoComplete = !InputCompleted && citySuggestions != null
        }
    }, [inputCompleted, setCity, setCitySuggestions, setInputCompleted])

    if (loading) return <CircleLoading />
    if (error != null) return <ErrorComponent status={error.status} message={error.message} />
    if (!weatherData) return <InitialSearchScreen setCity={setCity} city={city} citiesSuggestions={citySuggestions} setInputCompleted={setInputCompleted} showAutoComplete={showAutoComplete} />



    return (
        <>
            <WeatherCard setCity={setCity} city={city} weatherData={weatherData} citiesSuggestions={citySuggestions} setInputCompleted={setInputCompleted} showAutoComplete={showAutoComplete} />
        </>
    )

}

export default WeatherManager