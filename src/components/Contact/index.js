import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        // return setTimeout(() => {

            setLetterClass('text-animate-hover')
        }, [])
    // }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_7blkuj8',
            'template_6ae5dab',
            refForm.current,
            'jtZ1ue2TyAtPD87L1'
            
            
        )
        .then(() => {
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send message! Please try again.')
        }
        )
    }

  return (
    <div className='container contact-page'>
        <div className="me">
        <div className='text-zone'>
        
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}
                />
            </h1>
            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                    <li className="half">
                        <input type="text" name="user_name" placeholder ="Name" required />
                    </li>
                    <li className="half">
                        <input type="email" name="user_email" placeholder ="Email" required />
                    </li>
                    <li>
                        <input placeholder="Subject" type="text" name ="subject" required />
                    </li>
                    <li>
                        <textarea placeholder="Message" name ="message" required />
                    </li>
                    <li>
                        <input type="submit" className ="flat-button" value="SEND" />
                    </li>
                </form>
            </div>
<div>
    <p style={{fontSize: "20px", color: "gold"}}>Email: brian.hill.0023@gmail.com <br />
    <a href="https://docs.google.com/document/d/1599czzTAyjHVWjxz25fkWmmI763ZMn2wcD6-JPQ_lc4/edit" style={{color: "gold"}}>Resume</a>
    </p>
</div>

        </div>

        
            {/* <img src="profile picture_ccexpress.png" alt="This is me." style={{ display: "flex", float: "center", width: "300px", height: "300px", padding: "100px;"}}/> */}
        </div>

      <Loader type="pacman" />

    </div>
  )
}

export default Contact