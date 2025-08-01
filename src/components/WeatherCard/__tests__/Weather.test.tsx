import testSearchBarOf from "../../../shared-tests/testSearchBar";
import WeatherCard from "../Weather";
import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react'
import { Weather } from "../../../api/Weather";

const mockWeatherData: Weather = {
    main: {
        humidity: 42,
        temp: 33,
    },
    name: "Athens",
    weather: [{ icon: "01d" }],
    wind: {
        speed: 2.24,
    }
}

const renderWeatherCard = () => {

    const defaultProps = {
        city: "",
        setCity: () => { },
        inputCompleted: false,
        setInputCompleted: () => { },
        showAutoComplete: false,
        citiesSuggestions: null,
        weatherData: mockWeatherData
    }

    render(<WeatherCard {...defaultProps} />)
}


describe("WeatherCard component", () => {



    describe("Test the search bar", () => {
        testSearchBarOf(WeatherCard)
    })

    describe("Test that elements are rendered properly", () => {
        it('should render the weather icon', () => {
            renderWeatherCard()
            const weather_icon = screen.getByAltText("Clear sky")
            expect(weather_icon).toBeInTheDocument()
        })

        it('should render the temperature', () => {
            renderWeatherCard()
            const temperature = screen.getByText("33°C")
            expect(temperature).toBeInTheDocument()
        })

        it('should render the city name', () => {
            renderWeatherCard()
            const city = screen.getByText("Athens")
            expect(city).toBeInTheDocument()
        })

        it('should render the humidity icon, value and label', () => {
            renderWeatherCard()
            const humidity_icon = screen.getByAltText("humidity-icon")
            const humidityValue = screen.getByText("42 %")
            expect(humidity_icon).toBeInTheDocument()
            expect(humidityValue).toBeInTheDocument()
            expect(screen.getByText("Humidity")).toBeInTheDocument()
        })

        it('should render the wind icon, value and label', () => {
            renderWeatherCard()
            const wind_icon = screen.getByAltText("wind-icon")
            const windValue = screen.getByText("2.24 Km/h")
            expect(wind_icon).toBeInTheDocument()
            expect(windValue).toBeInTheDocument()
            expect(screen.getByText("Wind Speed")).toBeInTheDocument()
        })

    })
})



