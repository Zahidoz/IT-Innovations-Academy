import React, { useRef, useEffect, useState } from "react";
import "./style.scss";
import Nav from "../../Components/Common/Nav";
import Footer from "../../Components/Common/Footer/Footer";
import RoadmapStep from "../../Components/RoadMapStep";

import { roadmapSteps, calendar, payments, timeInterval } from "./frontendData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Animation from "../../Animations";

import reactIcon from "../../assets/icon/react_icon.png";
import completedImg from "../../assets/frontendIcons/completed.svg";
import CalendarDayBox from "../../Components/CalendarDayBox";
import PaymentCard from "../../Components/PaymentCard";
import TimeIntervalCar from "../../Components/TImeIntervalCard";


const LessonPage = ({ lesson }) => {
  gsap.registerPlugin(ScrollTrigger);
  const lessonLogo = useRef();
  const hero_title = useRef();
  const hero_subtitle = useRef();
  const tl = gsap.timeline({ defaults: { duration: 0.8 } });

  useEffect(() => {
    tl.fromTo(lessonLogo.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 });

    Animation(lessonLogo.current, -30, 0, 0, 0, 0, 1, 0, 1, 0, 0);
    Animation(hero_title.current, -20, 0, 0, 0, 0, 1);
    Animation(hero_subtitle.current, 0, 0, 10, 0, 0, 1);
  }, []);

  return (
    <div>
      <Nav />
      <div className="container">
        <section className="hero-s">
          <div className="hero-card">
            <img
              className="lessonIcon"
              ref={lessonLogo}
              src={reactIcon}
              alt=""
            />
            <div className="txt-s">
              <h1 ref={hero_title}>Frontend tədris kursu</h1>
              <div ref={hero_subtitle}>
                <p>
                  8 aylıq tədris kursumuzda Veb sahədənin frontend hissəsi
                  tədris edilir. Dünyanın ən məşhur kitabxanalarından olan{" "}
                  <span>REACT</span> peşəkar müəllimlərimiz tərəfindən
                  professional formada tədris edilir.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  architecto praesentium cumque laborum illo possimus!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="roadmap-s">
          <h2 id="header">Frontend Roadmap</h2>
          <p id="subHeader">
            Uğura gedən yol 8 aylıq tədris kursumuzdan keçir.
          </p>
          <section className="road-s">
            <div className="roadmap-c">
              {roadmapSteps.map((step) => {
                return (
                  <RoadmapStep
                    key={step.id}
                    name={step.title}
                    img={step.img}
                    design={step.design}
                  />
                );
              })}
            </div>
            <div className="road-right">
              <img src={completedImg} alt="" />
              <h1>8 aya Frontend Devoloper ol!</h1>
            </div>
          </section>
        </section>

        <section className="lessonCalendar-s">
          <h2 id="header">Dərs Cədvəli</h2>
          <p id="subHeader">
            Dərslər həftədə 3 dəfə olmaqla, 2 qoşa dərs keçirilir.
          </p>
          <div className="calendar-s">
            <div className="container">
              {calendar.map((item) => {
                return (
                  <CalendarDayBox
                    key={item.id}
                    hasLesson={item.hasLesson}
                    day={item.day}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="flipCards-s">
          <h2 id="header">Tedris Planımız</h2>
          <p id="subHeader">
            Beynəlxalq tədris metodikası qaydalarına uyğun vaxt bölgüsü
          </p>
          <div className="calendar-s">
            <div className="container">
             {
              timeInterval.map(item=>{
                return (
                  <TimeIntervalCar
                    key={item.id}
                    title={item.title}
                    subtitle={item.subtitle}
                    boxType={item.boxType}
                  />
                );
              })
             }
            </div>
          </div>
        </section>

        <section className="payment-s">
          <div className="container">
            <img src={reactIcon} alt="" />
            <div className="payment-wrapper">
              <h2>Ödəniş növləri</h2>
              <div className="payment-c">
                {payments.map((item) => {
                  return <PaymentCard title={item.title} price={item.price} />;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-s">
          <div className="contact-c">
            <h1>Bizimlə Əlaqə</h1>
            <p>30 dəqiqə ərzində sizin ilə əlaqə saxlayacıq.</p>
            <form action="">
              <input type="text" placeholder="Ad" />
              <input type="text" placeholder="Soyad" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Telefon" />
              <select name="" id="">
                <option value="">Hansı tədtis ilə maraqlanırdınız</option>
                <option value="">Frontend Devolopment</option>
                <option value="">Backend Devolopment</option>
                <option value="">Monbile Devolopment</option>
                <option value="">Artifical intelligence</option>
              </select>
              <button>Təsdiqlə</button>
            </form>
          </div>
          <div className="map-c">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24313.633842296338!2d49.803702!3d40.382166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308757a1f0bec7%3A0x44808b6369dc40a4!2sIT%20INNOVATIONS%20ACADEMY!5e0!3m2!1sen!2sus!4v1682411577530!5m2!1sen!2sus"
              width="840"
              height="500"
            ></iframe>
            <p>
              <span>Ünvan: </span> 157 Abbas Mirzə Şərifzadə küçəsi, Bakı 1138
            </p>
            <p>
              <span>Telefon: </span> 0515000654
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default LessonPage;
