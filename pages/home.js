
import Head from "next/head"
import Idea from "../components/Idea"
import CountryGuess from "../components/CountryGuess"
import Script from "next/script"
export default function getdata() {


    return (
        <div>
            <Script src="https://cdn.tailwindcss.com"></Script>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/daisyui@2.6.3/dist/full.css" rel="stylesheet" type="text/css" />
            </Head>
            <div className="container mx-auto mt-4 px-4">
                <div className="flex flex-row">
                    <div className="basis-1/4 px-4"> <Idea /></div>
                    <div className="basis-3/4 px-4"> <CountryGuess /></div>
                </div>

            </div>


        </div>
    )
}