import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faCss3, faGithub, faHtml5, faJs, faReact} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // return setTimeout(() => {

            setLetterClass('text-animate-hover')
        }, [])
    // }, [])

  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            

            <p>I’ve been a fan of technology, computers, and coding since I was a kid and in the last few years I’ve been dabbling a lot in the latter, ultimately taking a boot camp at General Assembly in June of 2021 and learning more than I could have ever imagined. I graduated in December of 2021.

In my most recent web development experience, I’ve been focusing more on the front end, utilizing React and APIs to make fun, useful, aesthetically pleasing applications. Since graduating General Assembly, I’ve made a travel advisor, a budget tracker, a social media UI, a Web 3.0 solidity smart contract app, a fitness app, and I'm constantly spending most of spare time developing and learning new things.

 
</p>
            

            
         
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
            
          </div>
        </div>
      </div>
<div>
       <Loader type="pacman" />

    </div>

    </>
  )
}

export default About