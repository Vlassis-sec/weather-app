import { useState } from "react"
import "./AutoComplete.css"
const myCities = ["London", "Oslo", "Athens", "New York City"]

const AutoComplete = () => {
    const [city, setCity] = useState("")

    const handleChange = (searchTerm: string) => {
        setCity(searchTerm)
        console.log(searchTerm)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Search" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="autocomplete-container">

                {myCities.map((city) =>
                    <div className="autocomplete-city" onClick={() => { handleChange(city) }}>{city}</div>
                )}

            </div>
        </div>
    )
}

export default AutoComplete