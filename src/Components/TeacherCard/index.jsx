import React from 'react'
import { teachers } from '../../Pages/HomePage/constants';
import './style.scss'

const TeacherCard = ({teacher}) => {
  return (
    <div className="card">
      <img src={teacher.img} alt="" />
      <h2>{teacher.name}</h2>
      <p>{teacher.speciality}</p>
    </div>
  );
}

export default TeacherCard