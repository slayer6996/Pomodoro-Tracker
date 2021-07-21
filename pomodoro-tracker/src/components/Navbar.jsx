import React from 'react'
import SignInBtn from './SignInBtn'
import './styles/navbar.css'

function Navbar() {

    return (
        <>
            <div className="nav">
                <h1>UpTics</h1>
                <SignInBtn />
            </div>
        </>
    )
}

export default Navbar