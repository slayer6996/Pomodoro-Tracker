import React, { useState } from 'react'
import './styles/home.css'

function Home() {
    const [time, setTime]=useState(1500)



    return (
        <>
            <div className="timerOptions">
                <h4 style={{borderBottom:'solid white 6px'}}>Pomodoro</h4>
                <h4>Short break</h4>
                <h4>Long break</h4>
            </div>
        </>
    )
}

export default Home