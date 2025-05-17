import React from "react";
import { useState, useEffect } from "react";
import { Weather } from "../../api/Weather"
import InitialSearchScreen from "../InitialSearchScreen/InitialSearchScreen";
import ErrorComponent from "../Error/ErrorComponet";
import CircleLoading from "../CircleLoading/CircleLoading";
import { ApiError } from "../../utilities/ApiError";
import { getWeather } from "../../api/getWeather";
import WeatherCard from "../WeatherCard/Weather";
import { AutoCompleteResponse } from "../../api/AutoComplete";
import { getAutocompleteSuggestions } from "../../api/getAutocompleteSuggestions";


const WeatherManager = () => {
    const [citySuggestions, setCitySuggestions] = useState<AutoCompleteResponse | null>(null)
    const [weatherData, setWeatherData] = useState<Weather | null>(null)
    const [city, setCity] = useState<string>("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ApiError | null>(null)
    const [inputCompleted, setInputCompleted] = useState(false)
    const [showAutoComplete, setShowAutoComplete] = useState(false)


    const search = async (city: string) => {
        setLoading(true)
        try {
            const data = await getWeather(city);
            setWeatherData(data)
        }
        catch (error) {
            if (error instanceof ApiError) {
                setError(error)
            }
        }
        finally {
            setLoading(false)
        }
    }

    const suggest = async (city: string) => {
        try {
            const suggestions = await getAutocompleteSuggestions(city)
            setCitySuggestions(suggestions)
        }
        catch (error) {
            if (error instanceof ApiError) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        if (!city || city.length === 0) {
            return;
        } else if (inputCompleted === false) {
            // call autocomplete API
            setShowAutoComplete(true)
            const timer = setTimeout(() => {
                suggest(city)
            }, 500)
            return () => clearTimeout(timer)
        } else if (inputCompleted) {
            // call weather API
            search(city)
            setShowAutoComplete(false)
            setCity("")
            setInputCompleted(false)
            setCitySuggestions(null)
            // Derived ShowAutoComplete state -> showAutoComplete = !InputCompleted && citySuggestions != null
        }
    }, [city, inputCompleted])

    if (loading) return <CircleLoading />
    if (error != null) return <ErrorComponent status={error.status} message={error.message} />
    if (!weatherData) return <InitialSearchScreen setCity={setCity} city={city} citiesSuggestions={citySuggestions} setInputCompleted={setInputCompleted} inputCompleted={inputCompleted} showAutoComplete={showAutoComplete} />



    return (
        <>
            <WeatherCard setCity={setCity} city={city} weatherData={weatherData} citiesSuggestions={citySuggestions} setInputCompleted={setInputCompleted} inputCompleted={inputCompleted} showAutoComplete={showAutoComplete} />
        </>
    )

}

export default WeatherManager