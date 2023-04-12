import React from "react";
import { useRef } from "react";
import "./styles.scss";
import Burger from "../../assets/icon/burger.png";
import { Link } from "react-router-dom";
const Index = () => {
  const resNav = useRef(); 

  const openResNav = () => {
    resNav.current.classList.toggle("active-nav");
  };

  return (
    <nav>
      <section className="nav-bg">

      </section>
      <div className="container">
        <Link to="/">
          <h1>IT Innovations</h1>
        </Link>
        <ul>
          <li>Kurslarımız</li>
          <li>Haqqımızda</li>
          <li>Əlaqə</li>
        </ul>
        <div className="btn-c">
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
