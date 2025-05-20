import React, { useState } from "react";
import WeatherManager from "./components/WeatherManager/WeatherManager";
import NavBar from "./components/NavBar/NavBar";
import { FormType } from "./components/Modal/ModalTypeUnion";
import Modal from "./components/Modal/Modal";
import LogIn from "./components/NavBar/LogIn";
import SignUp from "./components/NavBar/SignUp";



const App = () => {
  const [formType, setFormType] = useState<FormType | null>(null)
  const [openModal, setOpenModal] = useState(false)


  let formContent: React.ReactElement | null = null;

  if (formType === null) {
    formContent = null;
  } else if (formType === 'log-in') {
    formContent = <LogIn setOpenModal={setOpenModal} />
  } else if (formType === 'sign-up') {
    formContent = <SignUp setOpenModal={setOpenModal} />
  }

  return (
    <>
      <div className="app">
        <NavBar setOpenModal={setOpenModal} setFormType={setFormType} />
        <WeatherManager />
        {openModal &&
          <Modal setOpenModal={setOpenModal}>
            {formContent}
          </Modal>}

      </div>
    </>
  )
}

export default App




