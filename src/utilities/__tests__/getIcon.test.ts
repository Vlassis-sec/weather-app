import { describe, it, expect } from "vitest";
import getIcon from "../getIcon";
import clear_icon from "../../assets/clear.png";

describe("Get the Icon", () => {
  it("should give me the path of the icon as a string", () => {
    expect(getIcon("01d")).toBe(clear_icon);
  });
});

// This test relies on Vittest resolving assets like Vite via 'transformAssets:true'
