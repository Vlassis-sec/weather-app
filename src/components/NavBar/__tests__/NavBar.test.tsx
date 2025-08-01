import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { FormType } from '../../Modal/ModalTypeUnion'
import NavBar from '../NavBar'

describe("NavBar component", () => {
    let setOpenModalMock: React.Dispatch<React.SetStateAction<boolean>>
    let setFormTypeMock: React.Dispatch<React.SetStateAction<FormType>>

    beforeEach(() => {
        setOpenModalMock = vi.fn()
        setFormTypeMock = vi.fn()
        render(<NavBar setOpenModal={setOpenModalMock} setFormType={setFormTypeMock} />)
    })


    it("should render log-in and sign-up buttons", () => {
        const loginButton = screen.getByRole('button', { name: /Log In/i })
        const signupButton = screen.getByRole('button', { name: /Sign Up/i })
        expect(loginButton).toBeInTheDocument()
        expect(signupButton).toBeInTheDocument()
    })

    it('should call setOpenModal with true and setFormType with log-in after the log-in button is clicked', async () => {
        const loginButton = screen.getByRole('button', { name: /Log In/i })
        await userEvent.click(loginButton)
        expect(setOpenModalMock).toHaveBeenCalledTimes(1)
        expect(setFormTypeMock).toHaveBeenCalledTimes(1)
        expect(setOpenModalMock).toHaveBeenCalledWith(true)
        expect(setFormTypeMock).toHaveBeenCalledWith('log-in')
    })

    it('should call setOpenModal with true and setFormType with sign-up after sign-up button is clicked', async () => {
        const signupButton = screen.getByRole('button', { name: /Sign Up/i })
        await userEvent.click(signupButton)
        expect(setOpenModalMock).toHaveBeenCalledTimes(1)
        expect(setFormTypeMock).toHaveBeenCalledTimes(1)
        expect(setOpenModalMock).toHaveBeenCalledWith(true)
        expect(setFormTypeMock).toHaveBeenCalledWith('sign-up')
    })
})