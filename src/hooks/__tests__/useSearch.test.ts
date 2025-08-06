import { it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useSearch from "../useSearch";
import { ApiError } from "../../utilities/ApiError";

describe.only("useSearch hook", () => {
  it("should return the mocked data from MSW: Success case", async () => {
    const { result } = renderHook(() => useSearch("London", true));

    await waitFor(() =>
      expect(result.current.weatherData).toEqual({
        main: {
          humidity: 42,
          temp: 33,
        },
        name: "London",
        weather: [{ icon: "01d" }],
        wind: {
          speed: 2.24,
        },
      })
    );
    expect(result.current.error).toBe(null);
    expect(result.current.loading).toBe(false);
  });

  it("should return the mocked data from MSW: Failure case", async () => {
    const { result } = renderHook(() => useSearch("abc", true));

    await waitFor(() => {
      expect(result.current.weatherData).toBe(null);
      expect(result.current.loading).toBe(false);
      expect(result.current.error instanceof ApiError).toBe(true);
      expect(result.current.error).toEqual(
        expect.objectContaining({
          name: "Api Error",
          status: 404,
          message: "City not found",
        })
      );
    });
  });
});
