import React, { useState } from "react";
import WeatherManager from "./components/WeatherManager/WeatherManager";
import NavBar from "./components/NavBar/NavBar";
import Portal from "./components/Portal/Portal";
import { FormType } from "./components/Modal/ModalTypeUnion";



const App = () => {
  const [formType, setFormType] = useState<FormType | null>(null)
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className="app">
        <NavBar setOpenModal={setOpenModal} />
        <WeatherManager />
        {openModal && <Portal setOpenModal={setOpenModal} />}

      </div>
    </>
  )
}

export default App

