import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Modal from '../Modal'


describe('Modal component', () => {

    let setOpenModalMock: React.Dispatch<React.SetStateAction<boolean>>
    let modalContent: React.ReactElement

    function getModalElements(): HTMLElement[] {
        const modalBackground: HTMLElement = screen.getByRole("presentation")
        const modalContainer: HTMLElement = screen.getByRole("dialog")
        return [modalBackground, modalContainer]
    }

    beforeEach(() => {
        vi.resetAllMocks()
        setOpenModalMock = vi.fn()
        modalContent = <div>Modal Content</div>
    })




    it('should render the children of the Modal', () => {
        render(<Modal setOpenModal={setOpenModalMock}>{modalContent}</Modal>)
        expect(screen.getByText("Modal Content")).toBeInTheDocument()
    })

    it('should render modal content via portal into document.body', () => {
        const { container } = render(<Modal setOpenModal={setOpenModalMock}>{modalContent}</Modal>)
        const [modalBackground] = getModalElements()
        expect(container).not.toContainElement(modalBackground)
        expect(document.body).toContainElement(modalBackground)
    })

    it('should close the modal when its background is clicked', async () => {
        render(<Modal setOpenModal={setOpenModalMock}>{modalContent}</Modal>)
        const [modalBackground] = getModalElements()
        await userEvent.click(modalBackground)
        expect(setOpenModalMock).toHaveBeenCalledWith(false)
    })

    it('should not close the modal when the container is clicked', async () => {
        render(<Modal setOpenModal={setOpenModalMock}>{modalContent}</Modal>)
        const [, modalContainer] = getModalElements()
        await userEvent.click(modalContainer)
        expect(setOpenModalMock).not.toHaveBeenCalledWith(false)
    })

    it('should close the modal when the user presses escape', async () => {
        render(<Modal setOpenModal={setOpenModalMock}>{modalContent}</Modal>)
        await userEvent.keyboard('{Escape}')
        expect(setOpenModalMock).toHaveBeenCalledWith(false)
    })

    it('should not close the modal when the user presses any other key except escape', async () => {
        render(<Modal setOpenModal={setOpenModalMock}>{modalContent}</Modal>)
        await userEvent.keyboard('{Enter}')
        expect(setOpenModalMock).not.toHaveBeenCalled()
    })
})