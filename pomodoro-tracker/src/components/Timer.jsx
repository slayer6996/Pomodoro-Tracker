import React, { useEffect, useState } from 'react'
import './styles/timer.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Button } from '@material-ui/core';
import Home from './Home';

function Timer() {
    const [time, setTime] = useState(1500)
    const [start, setStart] = useState(false)

    useEffect(() => {
        let interval = null
        if (start) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [start])

    useEffect(() => {
        if (time===0) {
            setStart(false)
            setTime(1500)
        }
    }, [time])

    return (
        <>
            <Home/>
            <center>
                <div className="timer">
                    <center>
                        <div className="time">
                            <div>
                                <h1>{("0" + Math.floor(time / 60)).slice(-2)} : {("0" + time % 60).slice(-2)}</h1>
                            </div>
                            {
                                start ? (<PauseIcon style={{ fontSize: "80" }} onClick={() => setStart(false)} />) :
                                    (<PlayArrowIcon style={{ fontSize: "80" }} onClick={() => setStart(true)} />)
                            }
                        </div>
                    </center>
                </div>
                {
                    (time < 1500) && (<Button
                        style={{ backgroundColor: "#ff4b4b", marginTop: "2rem" }}
                        onClick={() => {
                            setStart(false)
                            setTime(1500)
                        }}>Abort task</Button>)
                }
            </center>
        </>
    )
}

export default Timer