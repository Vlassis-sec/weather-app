import { describe, it, expect } from "vitest";
import useSuggest from "../useSuggest";
import { renderHook, waitFor } from "@testing-library/react";

describe("useSuggest", () => {
  it("should give mocked citiesSuggestion : MSW Succes case", async () => {
    const { result } = renderHook(() => useSuggest("lo", false));

    await waitFor(() => {
      expect(result.current.citySuggestions).toEqual([
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
    });
  });
});
