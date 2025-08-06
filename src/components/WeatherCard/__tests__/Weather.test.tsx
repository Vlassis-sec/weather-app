import testSearchBarOf from "../../../shared-tests/testSearchBar";
import WeatherCard from "../Weather";
import { describe, it, expect } from "vitest";
import { render, screen, within } from '@testing-library/react'

const renderWeatherCard = () => {

    const defaultProps = {
        city: "",
        setCity: () => { },
        inputCompleted: false,
        setInputCompleted: () => { },
        showAutoComplete: false,
        citiesSuggestions: null,
        weatherData: {
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
            const container = screen.getByTestId('weather-screen')
            expect(within(container).getByAltText("Clear sky")).toBeInTheDocument()
        })

        it('should render the temperature', () => {
            renderWeatherCard()
            const container = screen.getByTestId('weather-screen')
            expect(within(container).getByText("33°C")).toBeInTheDocument()
        })

        it('should render the city name', () => {
            renderWeatherCard()
            const container = screen.getByTestId('weather-screen')
            expect(within(container).getByText("Athens")).toBeInTheDocument()
        })

        it('should render the humidity icon, value and label', () => {
            renderWeatherCard()
            const container = screen.getByTestId('weather-screen')
            expect(within(container).getByAltText("humidity-icon")).toBeInTheDocument()
            expect(within(container).getByText("42 %")).toBeInTheDocument()
            expect(within(container).getByText("Humidity")).toBeInTheDocument()
        })

        it('should render the wind icon, value and label', () => {
            renderWeatherCard()
            const container = screen.getByTestId('weather-screen')
            expect(within(container).getByAltText("wind-icon")).toBeInTheDocument()
            expect(within(container).getByText("2.24 Km/h")).toBeInTheDocument()
            expect(within(container).getByText("Wind Speed")).toBeInTheDocument()
        })

    })
})



