
import axios from "axios"
import React, { useState, useContext } from "react"
import { NameContext } from "./../pages/index"


export default function Currencies() {
    const [probability, setProbability] = useState([])
    const nameEntered = useContext(NameContext)

    const guessCountry = (aName) => {
        nameEntered.setName(aName.trim());
        if (aName) {
            axios.get("https://api.nationalize.io/?name=" + aName).then(response => {
                if (response.data.country.length > 0) {
                    setProbability(response.data.country)
                }
            })
        }
        else {
            setProbability([])
        }
    }
    return (
        <div>
            <h1 className="text-5xl mb-45 text-amber-300">Write your name</h1>
            <p className="my-4">We'll guess which country your name is from</p>
            <input type="text" onFocusOut={(e) => { guessCountry(e.target.value) }} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <div>
                {probability.length > 0 &&
                    probability.map((country, key) => {
                        return (
                            <div key={key} className={`text-${3 - key}xl mt-4`}>There is a {parseInt(country.probability * 100)} % of probability that you are from {country.country_id}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}