import React, { useState } from "react";
import { Weather } from "../api/Weather";
import { AutoCompleteResponse } from "../api/AutoComplete";
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

const mockWeatherData: Weather = {
    main: {
        humidity: 0,
        temp: 0,
    },
    name: "",
    weather: [{ icon: "" }],
    wind: {
        speed: 0,
    }
}

type defaultProps = {
    city: string,
    setCity: (value: React.SetStateAction<string>) => void,
    inputCompleted: boolean,
    setInputCompleted: () => void,
    showAutoComplete: boolean,
    citiesSuggestions: AutoCompleteResponse | null,
    weatherData: Weather

}

const testSearchBarOf = (
    Component: React.FunctionComponent<defaultProps>,
): void => {
    // Helper function
    const renderComponent = (overrides: object = {}) => {
        const mockSetCity = vi.fn();
        const mockSetInputCompleted = vi.fn();
        // Wrapper component
        const Wrapper = () => {
            const [city, realSetCity] = useState("");

            const setCity = (value: React.SetStateAction<string>) => {
                realSetCity(value);
                mockSetCity(value);
            };
            const defaultProps = {
                city,
                setCity,
                inputCompleted: false,
                setInputCompleted: mockSetInputCompleted,
                showAutoComplete: false,
                citiesSuggestions: null,
                weatherData: mockWeatherData,
                ...overrides,
            };

            return <Component {...defaultProps} />;
        };

        return {
            ...render(<Wrapper />),
            mockSetCity,
            mockSetInputCompleted
        }
    };

    describe(`Search input of ${Component}`, () => {
        it('should render the search bar ', () => {
            renderComponent()
            const searchInput = screen.getByPlaceholderText("Search")

            expect(searchInput).toBeInTheDocument()
        })

        it('should render the search button', () => {
            renderComponent()
            const searchButton = screen.getByRole('button', { name: /search-button/i })

            expect(searchButton).toBeInTheDocument()
        })

        it('should render the autocomplete container when showAutoComplete is true', () => {
            renderComponent({ showAutoComplete: true })
            const autoCompleteContainer = screen.getByTestId("autocomplete-container")

            expect(autoCompleteContainer).toBeInTheDocument()
        })

        it('should render the cities suggestions when autoComplete is true and citiesSuggestions != null', () => {
            renderComponent({
                showAutoComplete: true,
                citiesSuggestions: [
                    { address: { name: "Athens", country: "Greece", state: "Attica" } },
                    { address: { name: "New York", country: "United States of America", state: "New York" } }
                ]
            })
            const firstCitySuggestion = screen.getByText("Athens Attica")
            const secondCitySuggestion = screen.getByText("New York New York")

            expect(firstCitySuggestion).toBeInTheDocument()
            expect(secondCitySuggestion).toBeInTheDocument()
        })

        it('should render an empty div with a className="wait-cities-to-load" when autoComplete is true and citiesSuggestions is null', () => {
            renderComponent({
                showAutoComplete: true,
                citiesSuggestions: null
            })
            const emptyDiv = screen.getByTestId("wait-cities-to-load")

            expect(emptyDiv).toBeInTheDocument()
        })

        it('should render nothing when showAutocomplete is false', () => {
            renderComponent({ showAutoComplete: false })
            const autoCompleteContainer = screen.queryByTestId('autocomplete-container')

            expect(autoCompleteContainer).not.toBeInTheDocument()
        })

        it('should have "Athens" as the value of the input', async () => {
            renderComponent()
            const input = screen.getByPlaceholderText("Search")

            await userEvent.type(input, 'Athens')

            expect(input).toHaveValue('Athens')
        })

        it('should call the setCity with the correct value', async () => {
            const { mockSetCity } = renderComponent()
            const input = screen.getByPlaceholderText("Search")

            await userEvent.type(input, "Athens")

            expect(mockSetCity).toHaveBeenLastCalledWith("Athens")
        })

        it('should call setInputCompleted with true, when input is focused and Enter was pressed', async () => {
            const { mockSetInputCompleted } = renderComponent()
            const input = screen.getByPlaceholderText("Search")

            await userEvent.type(input, "Athens")
            await userEvent.keyboard('{Enter}')

            expect(mockSetInputCompleted).toHaveBeenCalledWith(true)
        })

        it('should call setInputCompleted with true, when user clicked the search icon', async () => {
            const { mockSetInputCompleted } = renderComponent()
            const input = screen.getByPlaceholderText("Search")
            const searchButton = screen.getByRole('button', { name: /search-button/i })

            await userEvent.type(input, "Athens")
            await userEvent.click(searchButton)

            expect(mockSetInputCompleted).toHaveBeenCalledWith(true)
        })

        it('should call setInputCompleted with true and setCity with the suggestion value when a suggestion is clicked', async () => {
            const { mockSetCity, mockSetInputCompleted } = renderComponent({
                showAutoComplete: true,
                citiesSuggestions: [
                    { address: { name: "Athens", country: "Greece", state: "Attica" } }
                ]
            })
            const suggestion = screen.getByText("Athens Attica")

            await userEvent.click(suggestion)

            expect(mockSetCity).toHaveBeenLastCalledWith("Athens")
            expect(mockSetInputCompleted).toHaveBeenCalledWith(true)
        })
    })
};

export default testSearchBarOf