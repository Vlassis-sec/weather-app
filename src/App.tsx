import { useState } from "react";
import WeatherManager from "./components/WeatherManager/WeatherManager";
import NavBar from "./components/NavBar/NavBar";
import { FormType } from "./components/Modal/ModalTypeUnion";
import Modal from "./components/Modal/Modal";
import useSearch from "./hooks/useSearch";
import useSuggest from "./hooks/useSuggest";
import { getFormContent } from "./utilities/getFormContent";





const App = () => {
  const [formType, setFormType] = useState<FormType | null>(null)
  const [openModal, setOpenModal] = useState(false)
  const [inputCompleted, setInputCompleted] = useState(false)
  const [city, setCity] = useState("")

  const formContent = getFormContent(formType, setOpenModal)
  const { weatherData, error, loading } = useSearch(city, inputCompleted)
  const { citySuggestions, setCitySuggestions } = useSuggest(city, inputCompleted)

  return (
    <>
      <div className="app">

        <NavBar
          setOpenModal={setOpenModal}
          setFormType={setFormType} />

        <WeatherManager
          city={city}
          setCity={setCity}
          weatherData={weatherData}
          error={error}
          loading={loading}
          citySuggestions={citySuggestions}
          setCitySuggestions={setCitySuggestions} inputCompleted={inputCompleted}
          setInputCompleted={setInputCompleted} />

        {openModal &&
          <Modal setOpenModal={setOpenModal}>
            {formContent}
          </Modal>}

      </div>
    </>
  )
}

export default App




