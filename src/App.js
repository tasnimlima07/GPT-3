import React from 'react'
import { Navbar, Brand } from './components';
import { Header } from './containers';

import './App.css';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
    </div>
  )
}

export default App
