import axios from "axios"
import React, { useEffect, useContext, useState } from "react"
import { NameContext } from "./../pages/index"
export default function GenderGuess() {
    const nameEntered = useContext(NameContext)
    const [gender, setGender] = useState()
    const getGender = () => {
        axios.get("https://api.genderize.io?name=" + nameEntered.name).then(response => {
            setGender(response.data.gender)
        })
    }

    useEffect(() => {
        getGender()
    }, [nameEntered.name])
    return (
        <div className="mt-5">
            <div>The name {nameEntered.name} is a {gender} name</div>
            <small>99% probability</small>
        </div>
    )
}