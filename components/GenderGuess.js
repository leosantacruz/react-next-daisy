import axios from "axios"
import React, { useEffect, useContext, useState } from "react"
import { NameContext } from "./../pages/index"
export default function GenderGuess() {
    const nameEntered = useContext(NameContext)
    const [gender, setGender] = useState()


    useEffect(() => {
        axios.get("https://api.genderize.io?name=" + nameEntered.name).then(response => {
            setGender(response.data.gender)
        })
    }, [nameEntered.name])
    return (
        <div className="mt-5">
            <h2>Gender</h2>
            <div>The name {nameEntered.name} is a {gender} name</div>
            <small>99% probability</small>
        </div>
    )
}