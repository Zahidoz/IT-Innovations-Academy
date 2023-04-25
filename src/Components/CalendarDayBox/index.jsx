import React from "react";
import './style.scss'
const CalendarDayBox = ({ ...todos }) => {
  return (
    <div className={`dayBox ${todos.hasLesson && "green"}`}>
      <h2>{todos.day}</h2>
      {todos.hasLesson ? (
        <>
          <h3>I smen</h3>
          <p>10:00 - 13:00</p>
          <h3>II smen</h3>
          <p>15:00 - 18:00</p>
        </>
      ) : (
        <h3 className="danger">Ders yoxdur</h3>
      )}
    </div>
  );
};

export default CalendarDayBox;
