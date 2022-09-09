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

In my most recent web development experience I’ve been focusing more on the front end, utilizing React and APIs to make fun, useful, aesthetically pleasing applications. Since graduating General Assembly, I’ve made a travel advisor, a budget tracker, a social media UI, a Web 3.0 solidity smart contract app, a fitness app, and I’m still in the process of working on other apps as well.

 At General Assembly, I started learning skills like HTML, CSS and vanilla Javascript for websites and/or applications. In Unit 3, we learned React.js for the front end and connected it to a back end with node and express to build a full stack application. My first project was a game and I chose a Rick and Morty themed Tic Tac Toe game. My second project was an art sharing app called Sharing is Scary and it showcased a little portion of my art portfolio. I decided to use Multer as the file uploading  middleware in that project. For my next project, I finished a full stack productivity app using React.js, Mongoose, MongoDB, Node.js, and Express.js called Accompli. For my final capstone project, I decided to do an emotional support app using MERN. Since then I’ve continued to learn and practice every day, mainly focusing on React and the front end, CSS frameworks, NextJS, and APIs. I’m now starting to dive more into python and I’m taking a javascript data structures and algorithms course on udemy.  I am a fast learner and I believe I can learn anything. I didn’t have any experience with any of the things that I learned at GA and yet here I am looking for a job to utilize the skills I learned within just a few short months.
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