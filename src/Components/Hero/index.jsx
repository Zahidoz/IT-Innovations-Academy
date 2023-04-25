import React from "react";
import "./style.scss";
import { useEffect,useRef } from "react";
import gsap from "gsap";

const Hero = ({ header, title, btnTxt, heroImg }) => {
  const tl = gsap.timeline({ defaults: { duration: 0.8 } });
  const hero = useRef();
  const heroTxt = useRef();
  const heroImg_a = useRef();
  useEffect(() => {
    tl.fromTo(hero.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0 });
    tl.fromTo(heroTxt.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0 });
    tl.fromTo(heroImg_a.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0 },'<');
  }, []);
  return (
    <section className="hero">
      <div ref={hero} className="container">
        <div ref={heroTxt} className="hero-txt">
          <h1>{header}</h1>
          <p>{title}</p>
          <button>{btnTxt}</button>
        </div>
        <img ref={heroImg_a} src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
