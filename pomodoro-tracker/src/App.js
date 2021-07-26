import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {LoginContext} from './Contexts/LoginContext'

function App() {
  const [auth, setAuth]=useState(false || window.localStorage.getItem("auth")==="true")

  const [user,setUser]=useState({
      name:"",
      email:""
  })

  return (
    <>
      <LoginContext.Provider value={{auth, setAuth, user, setUser}}>
      <Navbar/>
      <Home/>
      </LoginContext.Provider>
    </>
  );
}

export default App;