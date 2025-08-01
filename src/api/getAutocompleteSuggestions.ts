import { ApiError } from "../utilities/ApiError";
import { AutoCompleteResponse } from "./AutoComplete";

const API_KEY = import.meta.env.VITE_AUTOCOMPLETE_API_KEY;
const URL = `https://api.locationiq.com/v1/autocomplete?key=${API_KEY}&limit=5&q=`;

export const getAutocompleteSuggestions = async (
  city: string
): Promise<AutoCompleteResponse> => {
  const response = await fetch(URL + city);
  const citiesList = await response.json();
  if (!response.ok) {
    throw new ApiError(response.status, citiesList);
  }
  return citiesList;
};
