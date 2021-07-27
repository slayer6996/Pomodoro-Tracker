import React, { useContext } from 'react'
import SignInBtn from './SignInBtn'
import './styles/navbar.css'
import { LoginContext } from '../Contexts/LoginContext'
import { Button } from '@material-ui/core'
import firebase from '../firebase'

function Navbar() {
    const { auth } = useContext(LoginContext)

    function signOut() {
        firebase.auth().signOut().then(() => {
            window.localStorage.setItem('auth', 'false')
        })
    }

    return (
        <>
            <div className="nav">
                <h1>UpTics</h1>
                {
                    auth ? (<form>
                        <Button type="submit" style={{ backgroundColor: "#1CB0F6", color: "white" }} onClick={signOut}>
                            Sign Out
                        </Button>
                    </form>) : <SignInBtn />
                }
            </div>
        </>
    )
}

export default Navbar