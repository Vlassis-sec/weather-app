import { FormType } from "../components/Modal/ModalTypeUnion"
import LogIn from "../components/Forms/LogIn";
import SignUp from "../components/Forms/SignUp";
import React from "react";

export const getFormContent = (
    formType: FormType,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>): React.ReactElement | null => {

    if (formType === 'log-in') {
        return <LogIn setOpenModal={setOpenModal} />
    }

    if (formType === 'sign-up') {
        return <SignUp setOpenModal={setOpenModal} />
    }

    return null
}