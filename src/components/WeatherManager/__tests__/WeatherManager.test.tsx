import { describe, it } from "vitest";
import { screen, within } from '@testing-library/react'
import renderWeatherManager from "./utilities/renderWeatherManager";

describe('WeatherManager', () => {
    it('should return InitialSearchScren on initial render', () => {
        renderWeatherManager()
        const container = screen.getByTestId("initial-screen")
        expect(within(container).getByTestId("rain-container")).toBeInTheDocument();
        expect(within(container).getByPlaceholderText("Search")).toBeInTheDocument();
    })

    it('should return WeatherCard when weatherData has weather data', () => {
        renderWeatherManager({
            weatherData: {
                main: {
                    humidity: 42,
                    temp: 33,
                },
                name: "Athens",
                weather: [{ icon: "01d" }],
                wind: {
                    speed: 2.24,
                },
            }
        })
        const container = screen.getByTestId("weather-screen")
        expect(within(container).getByPlaceholderText("Search")).toBeInTheDocument()
        expect(within(container).getByText("Athens")).toBeInTheDocument()
        expect(within(container).getByText("33°C")).toBeInTheDocument()
    }
    )

    it('should return Loading component when loading state is true', () => {
        renderWeatherManager({ loading: true })

        expect(screen.getByTestId('circle-loading')).toBeInTheDocument()
    })
    it('should return Error component when API gives a resposne with status outside of the range of 2xx', async () => {
        renderWeatherManager({
            error: {
                name: "Api Error",
                status: 404,
                message: "City not found"
            }
        })
        const container = screen.getByRole('alert')
        expect(within(container).getByTestId('error')).toBeInTheDocument()
    })
})