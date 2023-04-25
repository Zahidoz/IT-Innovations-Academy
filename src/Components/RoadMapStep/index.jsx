import React from 'react'
import './style.scss'

const RoadmapStep = ({img,name, design}) => {
  return (
    <div className="step ">
      <img src={img} alt="" />
      <div className={`box ${design}`}>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default RoadmapStep