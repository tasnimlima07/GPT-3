import React from 'react'
import './features.css'

const Features = ({title, text}) => {
  return (
    <div className='gpt3__features-container__features'>
      <div className='gpt3__features-container__features-title'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='gp3__features-container__fetures-text'>
        <p>{text}</p>
      </div>

    </div>
  )
}

export default Features
