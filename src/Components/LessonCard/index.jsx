import React from 'react'
import './style.scss'


const LessonCard = ({ lesson }) => {
  return (
    <div className="lesson-card">
      <div className="card-header">
        <img src={lesson.img} alt="" />
        <div className="header-txt">
          <span>{lesson.subtitle}</span>
          <h2>{lesson.title}</h2>
        </div>
      </div>
      <div className="line"></div>
      <ul>
        {lesson.list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <button>Daha ətraflı</button>
    </div>
  );
};

export default LessonCard;