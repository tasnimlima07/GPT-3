import React from 'react'
import { Navbar, Brand, Features } from './components';
import { Header, WhatGPT3 } from './containers';

import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
    </div>

  )
}

export default App
