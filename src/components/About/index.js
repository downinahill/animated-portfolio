import React from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters />
            </h1>
        </div>
    </div>
  )
}

export default About