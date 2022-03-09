import axios from "axios"
import React, { useState, useEffect } from "react"

export default function Card() {
    const [idea, setIdea] = useState({})
    const [randomNumber, setRandomNumber] = useState(0)
    const [loadingState, setLoadingState] = useState(true)
    const loadingStateText = {
        true: 'Loading funny suggestion...',
        false: `...${idea.activity}`
    }
    const getIdea = () => {
        setLoadingState(true)
        setTimeout(() => {
            axios.get("https://www.boredapi.com/api/activity").then(response => {
                setIdea(response.data)
                setRandomNumber(randomNumber + 1)
                setLoadingState(false)
            })
        }, 1000)
    }
    useEffect(() => {
        getIdea()
    }, []
    )
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={`https://api.lorem.space/image/album?w=400&h=400&random=` + randomNumber} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-amber-300">What if you...</h2>
                <p>
                    {loadingStateText[loadingState]}
                </p>
                <div className="card-actions justify-end">
                    <button disabled={loadingState} onClick={getIdea} className={loadingState ? `btn btn-primary mt-3 loading` : `btn btn-primary mt-3`}>Bring a new idea</button>
                </div>
            </div >
        </div >
    )
}