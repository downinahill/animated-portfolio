import React, {useEffect, useState} from 'react'
import LogoB from '../../assets/images/B-Letter-PNG.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
// import Loader from 'react-loaders'

const Home= () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['B', 'r', 'i', 'a', 'n', ',']
    const jobArray = ['a', '', 'w', 'e', 'b', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        // return setTimeout(() => {

            setLetterClass('text-animate-hover')
        }, [])
    // }, [])

  return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>

                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

            <img src={LogoB} alt="developer" />
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
            />
            <br /> 
            <AnimatedLetters 
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
            />
            </h1>
            <h2>Full stack developer, artist, musician, writer, and forever a student of everything.</h2>
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
        </div>
    <Logo className='large-logo'/>
    {/* <Loader type="pacman" /> */}
    </div>
  )
}

export default Home