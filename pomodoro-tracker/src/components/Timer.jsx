import React, { useEffect, useState } from 'react'
import './styles/timer.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import { Button } from '@material-ui/core';

function Timer(props) {
    const [time, setTime] = useState(props.time)
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
            setTime(props.time)
        }
    }, [time])

    return (
        <>
            <center>
                <div className="timer">
                    <center>
                        <div className="time">
                            <div>
                                <p>{props.timerType}</p>
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
                    (time < props.time) && (<Button
                        style={{ backgroundColor: "#ff4b4b", marginTop: "2rem" }}
                        onClick={() => {
                            setStart(false)
                            setTime(props.time)
                        }}>Quit</Button>)
                }
            </center>
        </>
    )
}

export default Timer