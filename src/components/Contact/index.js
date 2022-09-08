import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // return setTimeout(() => {

            setLetterClass('text-animate-hover')
        }, [])
    // }, [])

  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
                    idx={15}
                />
            </h1>
           


        </div>

      

    </div>
  )
}

export default Contact