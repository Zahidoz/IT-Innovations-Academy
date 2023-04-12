import React from 'react'
import './style.scss'

const FlipCard = ({project}) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={project.img} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <img src={project.authorImg} alt="" />
          <div className="txt-s">
            <h1>{project.author}</h1>
            <p>{project.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard