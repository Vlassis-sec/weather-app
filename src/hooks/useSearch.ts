import { Weather } from "../api/Weather";
import { useState, useEffect } from "react";
import { getWeather } from "../api/getWeather";
import { ApiError } from "../utilities/ApiError";

const useSearch = (city: string, inputCompleted: boolean) => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [error, setError] = useState<ApiError | null>(null);
  const [loading, setLoading] = useState(false);

  const search = async (city: string) => {
    setLoading(true);
    try {
      const data = await getWeather(city);
      setWeatherData(data);
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!city || city.length === 0) {
      return;
    } else if (inputCompleted) {
      search(city);
    }
  }, [city, inputCompleted]);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useSearch;
