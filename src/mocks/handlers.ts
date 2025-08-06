import { http, HttpResponse } from "msw";
import { citiesList } from "../utilities/citiesList";
import { citiesFragmentsList } from "../utilities/citiesFragmentsList";
import { checkApiKey } from "../utilities/checkQueries";
import { checkUnits } from "../utilities/checkQueries";
import { checkLimit } from "../utilities/checkQueries";

const WEATHER_API_KEY = import.meta.env.VITE_APP_ID;
const AUTOCOMPLETE_API_KEY = import.meta.env.VITE_AUTOCOMPLETE_API_KEY;

export const handlers = [
  http.get("https://api.openweathermap.org/data/2.5/weather", ({ request }) => {
    const url = new URL(request.url);

    const units = url.searchParams.get("units");
    const apiKey = url.searchParams.get("appid");
    const city = url.searchParams.get("q");

    if (!checkApiKey(apiKey, WEATHER_API_KEY)) {
      return new HttpResponse("Not valid weather key", { status: 400 });
    }

    if (!checkUnits(units)) {
      return new HttpResponse("Wrong units, should be metric", {
        status: 400,
      });
    }

    if (citiesList.includes(city!.toLowerCase())) {
      return HttpResponse.json({
        main: {
          humidity: 42,
          temp: 33,
        },
        name: city,
        weather: [{ icon: "01d" }],
        wind: {
          speed: 2.24,
        },
      });
    } else {
      return HttpResponse.json(
        {
          cod: 404,
          message: "City not found",
        },
        { status: 404 }
      );
    }
  }),

  http.get("https://api.locationiq.com/v1/autocomplete", ({ request }) => {
    const url = new URL(request.url);

    const apiKey = url.searchParams.get("key");
    const limit = url.searchParams.get("limit");
    const cityFragment = url.searchParams.get("q");

    if (!checkApiKey(apiKey, AUTOCOMPLETE_API_KEY)) {
      return new HttpResponse("Not valid autocomplete key", { status: 400 });
    }
    if (!checkLimit(limit)) {
      return new HttpResponse("Wrong limit, should be 5", { status: 400 });
    }

    if (citiesFragmentsList.includes(cityFragment!.toLowerCase())) {
      return HttpResponse.json([
        {
          address: {
            name: "New York",
            country: "United States of America",
            state: "New York",
          },
        },
        {
          address: {
            name: "New York",
            country: "United States of America",
            state: "New York",
          },
        },
        {
          address: {
            name: "New York",
            country: "United States of America",
            state: "New York",
          },
        },
        {
          address: {
            name: "New York",
            country: "United States of America",
            state: "New York",
          },
        },
        {
          address: {
            name: "New York",
            country: "United States of America",
            state: "New York",
          },
        },
      ]);
    } else {
      return new HttpResponse("Not valid input", { status: 404 });
    }
  }),
];
