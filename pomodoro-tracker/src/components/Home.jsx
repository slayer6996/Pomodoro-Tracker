import React, { useContext } from 'react'
import './styles/home.css'
import Timer from './Timer'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { LoginContext } from '../Contexts/LoginContext'

function Home() {
    const { auth, user } = useContext(LoginContext)
    return (
        <>
            <BrowserRouter>
                <center>
                    <div className="timerOptions">
                        <Link to="/">
                            <h4 style={{ color: 'white', textDecoration: 'underline', marginBottom: "-2px" }}>Pomodoro</h4>
                        </Link>
                        <Link to="/shortbreak">
                            <h4 style={{ color: 'white', textDecoration: 'underline', marginBottom: "-2px" }}>Short break</h4>
                        </Link>
                        <Link to="/longbreak">
                            <h4 style={{ color: 'white', textDecoration: 'underline', marginBottom: "-2px" }}>Long break</h4>
                        </Link>
                    </div>
                </center>
                <Switch>
                    <Route path="/" component={() => <Timer time={1500} timerType={"Pomodoro"} />} exact />
                    <Route path="/shortbreak" component={() => <Timer time={300} timerType={"Short break"} />} exact />
                    <Route path="/longbreak" component={() => <Timer time={900} timerType={"Long break"} />} exact />
                </Switch>
                <center>
                    {/* {
                        auth ? (<input className="taskTitle" type="text" placeholder="Task title" />) : (<p className="signInMessage">Sign in to add tasks</p>)
                    } */}
                </center>
            </BrowserRouter>
        </>
    )
}

export default Home