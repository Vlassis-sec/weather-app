import { useState, useEffect } from "react";
import { AutoCompleteResponse } from "../api/AutoComplete";
import { getAutocompleteSuggestions } from "../api/getAutocompleteSuggestions";
import { ApiError } from "../utilities/ApiError";

const useSuggest = (city: string, inputCompleted: boolean) => {
  const [citySuggestions, setCitySuggestions] =
    useState<AutoCompleteResponse | null>(null);

  const suggest = async (city: string) => {
    try {
      const data = await getAutocompleteSuggestions(city);
      setCitySuggestions(data);
    } catch (error) {
      if (error instanceof ApiError) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!city || city.length === 0) {
      return;
    } else if (inputCompleted === false) {
      const timer = setTimeout(() => {
        suggest(city);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [city, inputCompleted]);

  return { citySuggestions, setCitySuggestions };
};

export default useSuggest;
