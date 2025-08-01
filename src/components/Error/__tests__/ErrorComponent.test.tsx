import { describe, it, expect } from "vitest";
import { render, screen, within } from '@testing-library/react'
import ErrorComponent from "../ErrorComponet";

describe('Error Component', () => {
    function renderErrorComponent() {
        return render(<ErrorComponent status={404} message={"City not found"} />)
    }

    it('should render the status of the error', () => {
        renderErrorComponent()
        const alert = screen.getByRole("alert")
        expect(within(alert).getByText(/404/i)).toBeInTheDocument()
        expect(within(alert).getByText(/City not found/i)).toBeInTheDocument()
    })
})