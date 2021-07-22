import React, { useState } from 'react'
import './styles/home.css'
import Timer from './Timer'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <BrowserRouter>
                <div className="timerOptions">
                    <Link to="/">
                        <h4 style={{color:'white',textDecoration:'underline', marginBottom:"-2px"}}>Pomodoro</h4>
                    </Link>
                    <Link to="/shortbreak">
                        <h4 style={{color:'white',textDecoration:'underline', marginBottom:"-2px"}}>Short break</h4>
                    </Link>
                    <Link to="/longbreak">
                        <h4 style={{color:'white',textDecoration:'underline', marginBottom:"-2px"}}>Long break</h4>
                    </Link>
                </div>
                <Switch>
                    <Route path="/" component={() => <Timer time={1500} timerType={"Pomodoro"} />} exact />
                    <Route path="/shortbreak" component={() => <Timer time={300} timerType={"Short break"} />} exact />
                    <Route path="/longbreak" component={() => <Timer time={900} timerType={"Long break"} />} exact />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Home