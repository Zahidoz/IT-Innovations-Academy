import React from "react";
import { useRef } from "react";
import "./styles.scss";
import Burger from "../../../assets/icon/burger.png";
import { Link } from "react-router-dom";
import { useEffect } from "react"; 

import gsap from "gsap";

const Index = () => {
  const resNav = useRef();
  const buttons = useRef(); 
  const link1 = useRef(); 
  const link2 = useRef(); 
  const link3 = useRef(); 
  const tl = gsap.timeline({ defaults: { duration: 0.8 } });
  const logo = useRef();

  const openResNav = () => {
    resNav.current.classList.toggle("active-nav");
  };

  useEffect(()=>{
  tl.fromTo(logo.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 });
  tl.fromTo(buttons.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 },'<');
  tl.fromTo(link1.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: .3 });
  tl.fromTo(link2.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: .3 });
  tl.fromTo(link3.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: .3 });

  },[])

  return (
    <nav>
      <section className="nav-bg"></section>
      <div className="container">
        <Link to="/">
          <h1 ref={logo}>IT Innovations</h1>
        </Link>
        <ul>
          <Link to='/lesson'>
            <li ref={link1}>Kurslarımız</li>
          </Link>
          <li ref={link2}>Haqqımızda</li>
          <li ref={link3}>Əlaqə</li>
        </ul>
        <div ref={buttons} className="btn-c">
          <Link to="/login">
            <button id="btn-signIn">Daxil ol</button>
          </Link>
          <Link to="/register">
            <button id="btn-signUp">Qeydiyyat</button>
          </Link>
          <img onClick={openResNav} src={Burger} alt="" />
        </div>
        <div className="res-nav" ref={resNav}>
          <div className="res-nav-box">
            <h2>Hesab</h2>
            <li>Giriş et</li>
            <li>Qeydiyyat</li>
          </div>
          <div className="res-nav-box">
            <h2>Qısayollar</h2>
            <li>Ana səhifə</li>
            <li>Kurslar</li>
            <li>Haqqımızda</li>
            <li>Əlaqə</li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
