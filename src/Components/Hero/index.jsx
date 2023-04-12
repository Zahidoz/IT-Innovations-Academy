import React from 'react'
import './style.scss'
import { useEffect } from 'react'

const Hero = ({header,title,btnTxt,heroImg}) => {
    
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-txt">
          <h1>{header}</h1>
          <p>
            {title}
          </p>
          <button>{btnTxt}</button>
        </div>
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
}

export default Hero