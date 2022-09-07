import React, { useRef }  from 'react'
import './index.scss';
import LogoB from '../../assets/images/B-Letter-PNG.png';


const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();



    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoB} alt="5"/>
            <svg 
                width= "559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        className='svg-container'
                        transform="translate(0 457) scale(.1 -.1)"
                        fill="none"
                    >
                    <path
                        ref={outlineLogoRef}
                        d=''
                />
                </g>
            </svg>
        </div>

)
}
export default Logo