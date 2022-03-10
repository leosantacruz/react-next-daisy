
import React, { useState } from "react"
import Head from "next/head"
import Idea from "../components/Idea"
import CountryGuess from "../components/CountryGuess"
import GenderGuess from "../components/GenderGuess"
import Script from "next/script"

export const NameContext = React.createContext()
export default function Getdata() {
  const [name, setName] = useState()
  return (
    <div>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.6.3/dist/full.css" rel="stylesheet" type="text/css" />
      </Head>
      <div className="container mx-auto mt-10 px-4">
        <div className="flex flex-row">
          <div className="basis-1/4 px-4"> <Idea /></div>
          <div className="basis-3/4 px-4">
            <NameContext.Provider value={{ name, setName }}>
              <CountryGuess />
              <GenderGuess />
            </NameContext.Provider>
          </div>
        </div>

      </div>
    </div>
  )
}