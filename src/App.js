import React from 'react'
import { Navbar, Brand } from './components';
import { Header, WhatGPT3, Feature, Possibility } from './containers';

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
      <Feature/>
      <Possibility/>
    </div>

  )
}

export default App
