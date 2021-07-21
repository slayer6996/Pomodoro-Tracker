import React, { useEffect, useState } from 'react'
import './styles/timer.css'

function Timer() {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)

    useEffect(() => {
        let interval = null
        if (start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [start])
    return (
        <>
            <center>
                <div className="timer">
                    <center>
                        <div className="time">
                            <div>
                                <h1>{Math.floor(time / 60)} : {time % 60}</h1>
                            </div>
                            <button onClick={() => setStart(true)}>start</button>
                            <button onClick={() => setStart(false)}>stop</button>
                            <button onClick={() => {
                                setStart(false)
                                setTime(0)
                            }}>reset</button>
                        </div>
                    </center>
                </div>
            </center>
        </>
    )
}

export default Timer