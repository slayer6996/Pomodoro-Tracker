import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {LoginContext} from './Contexts/LoginContext'

function App() {

  return (
    <>
      <LoginContext.provider>
      <Navbar/>
      <Home/>
      </LoginContext.provider>
    </>
  );
}

export default App;
