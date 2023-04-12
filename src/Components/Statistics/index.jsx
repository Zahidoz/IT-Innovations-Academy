import React from 'react'
import './style.scss'

const Statistics = ({statistic}) => {
  return ( 

        <div className="statistic-box">
          <img src={statistic.img} alt="" />
          <div className="txt-wrapper">
            <span>{statistic.title}</span>
            <h2>{statistic.count}</h2>
          </div>
        </div>

  );
}

export default Statistics