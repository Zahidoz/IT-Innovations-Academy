import React from 'react'
import './style.scss'

const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card">
      <img src={feature.img} alt="" />
      <h3>{feature.title}</h3>
      <p>{feature.subtitle}</p>
      <button>Daha ətraflı</button>
    </div>
  ); 
};

export default FeatureCard