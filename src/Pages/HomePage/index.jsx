import React from "react";
import Hero from "../../Components/Hero";
import Nav from "../../Components/Nav";
import "./styles.scss";

import { features, projects,statistics, lessons, teachers } from "./constants";
import Carusel from "../../Components/Carusel";

import Hero1 from "../../assets/img/header1.svg";
import FeatureCard from "../../Components/FeatureCard";
import LessonCard from "../../Components/LessonCard";
import Statistics from "../../Components/Statistics";
import FlipCard from "../../Components/FlipCard";
import TeacherCard from "../../Components/TeacherCard";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="homeP">
      <Nav />
      <Hero
        header={"İlk addımı sen at!"}
        title={
          "Kursumuzda bütün dərslər 5 ildən çox təcrübəsi olan Peşəkar müəllimlər tərəfindən tədris olunur."
        }
        btnTxt={"Bizə qoşul!"}
        heroImg={Hero1}
      />
      <section className="features-s">
        <h2 id="HeaderTxt">Kurslarımız</h2>
        <p id="SubHeaderTxt">
          Lorem ipsum dolor sit amet, <span>onsectetur adipisicing</span> elit.
          Minima.
        </p>
        <div className="container">
          {features.map((feature) => {
            return <FeatureCard feature={feature} />;
          })}
        </div>
      </section>
      <section className="lessons-card-s">
        <div className="container">
          {lessons.map((lesson) => {
            return <LessonCard lesson={lesson} />;
          })}
        </div>
      </section>

      <section className="statistics-s">
        <div className="container">
          {statistics.map((item) => {
            return <Statistics statistic={item} />;
          })}
        </div>
      </section>

      <section className="projects-s">
        <h2 id="HeaderTxt">Tələbələrimizin nəticələri</h2>
        <p id="SubHeaderTxt">
          Lorem ipsum dolor sit amet, <span>onsectetur adipisicing</span> elit.
          Minima.
        </p>
        <div className="container">
          {projects.map((item) => {
            return <FlipCard project={item} />;
          })}
        </div>
      </section>

      <h2 id="HeaderTxt">Peşəkar Müəllimlərimiz</h2>
      <p id="SubHeaderTxt">
        Lorem ipsum dolor sit amet, <span>onsectetur adipisicing</span> elit.
        Minima.
      </p>
      <section className="teacherCards-s">
        <div className="container">
          {teachers.map((teacher) => {
            return <TeacherCard teacher={teacher} />;
          })}
        </div>
      </section>
      <Footer/> 
    </div>
  );
};

export { HomePage };
