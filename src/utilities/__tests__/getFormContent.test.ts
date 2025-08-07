import { describe, it, expect } from "vitest";
import { getFormContent } from "../getFormContent";
import LogIn from "../../components/Forms/LogIn";
import SignUp from "../../components/Forms/SignUp";

describe("getFormContent", () => {
  it("Should return null, if formType is null", () => {
    const formContent = getFormContent(null, vi.fn());
    expect(formContent).toBe(null);
  });

  it("should return the LogIn component when the formType is log-in", () => {
    const formContent = getFormContent("log-in", vi.fn());
    expect(formContent?.type).toBe(LogIn);
  });

  it("should return the SignUp component when the formType is sign-up", () => {
    const formContent = getFormContent("sign-up", vi.fn());
    expect(formContent?.type).toBe(SignUp);
  });
});
