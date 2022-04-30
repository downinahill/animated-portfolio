import React from 'react'
import LogoTitle from '../../assets/images/Brian.png'
import { Link } from 'react-router-dom'

const Home= () => {
  return (
    <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br /> I'm
            <img src={LogoTitle} alt="developer" />
            Brian
            <br /> 
            web developer
            </h1>
            <h2>Full Stack Developer with a focus on Front End and React</h2>
            <Link to>CONTACT ME</Link>
        </div>

    </div>
  )
}

export default Home