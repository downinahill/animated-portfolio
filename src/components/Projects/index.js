import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { projects } from "../../data";
import Loader from 'react-loaders'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        // return setTimeout(() => {

            setLetterClass('text-animate-hover')
        }, [])
    // }, [])

  return (
    <div className='container projects-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={[]}
                    idx={15}
                />
            </h1>
       
          


        </div>
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
                    {/* <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1> */}
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        
                    </p>
                </div>
                <div className="projects">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="gallery">
                                <img
                                    alt="gallery"
                                    className="image"
                                    src={project.image}
                                />
                                <div className="subtitle">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title">
                                        {project.title}
                                    </h1>
                                    <p className="description">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
      
<Loader type="pacman"/>
    </div>
  )
}

export default Projects