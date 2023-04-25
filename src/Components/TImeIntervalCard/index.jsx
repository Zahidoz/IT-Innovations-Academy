import React from 'react'
import './style.scss'

const TimeIntervalCar = ({title,subtitle,boxType}) => {
  return (
    <div className={`intervalBox ${boxType}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default TimeIntervalCar