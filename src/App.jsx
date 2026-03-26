import {useState} from 'react'
import './App.css'
import Hero from "@/components/Hero.jsx";
import InfoCard from "@/components/InfoCard/InfoCard.jsx";

function App() {

    return (
        <div className="flex-col justify-center ">
            <Hero/>

            <div id='box-2' className='flex justify-center h-fit gap-10 w-full m-3 mx-6 p-3'>
                {/*    two floating info card components    */}
                <InfoCard/>
            </div>

        </div>
    )
}

export default App
