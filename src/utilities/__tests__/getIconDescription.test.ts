import { describe, it, expect } from "vitest";
import getIconDescription from "../getIconDescription";

describe("Icon Description", () => {
  it("Should take code from the API response, and return a weather description", () => {
    expect(getIconDescription("01d")).toBe("Clear sky");
  });
});
