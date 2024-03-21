import React from 'react'
import { Navbar, Brand, CTA } from './components';
import { Header, WhatGPT3, Feature, Possibility, Blog, Footer } from './containers';

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
      <CTA/>
      <Blog/>
      <Footer/>
    </div>

  )
}

export default App
