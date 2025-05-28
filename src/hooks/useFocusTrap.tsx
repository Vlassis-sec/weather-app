import { useEffect } from 'react'

const useFocusTrap = (ref: React.RefObject<HTMLFormElement | null>) => {


    useEffect(() => {
        const form = ref.current
        const elements: NodeListOf<HTMLElement> | undefined = form?.querySelectorAll(
            'input, [href], button')
        const firstElement = elements?.[0]
        const lastElement = elements?.[elements.length - 1]

        const handleTab = (event: KeyboardEvent) => {
            if (event.key === 'Tab') {
                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault()
                    lastElement?.focus()
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault()
                    firstElement?.focus()
                }

            }
        }

        form?.addEventListener('keydown', handleTab)

        return () => {
            form?.removeEventListener('keydown', handleTab)
        }
    }, [ref])
}

export default useFocusTrap