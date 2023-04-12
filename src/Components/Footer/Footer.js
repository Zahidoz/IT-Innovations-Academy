import React from 'react'
import './Footer.scss' 

const Footer = () => {
  return (
    <footer>
      <div className="footer-c">
        <div className="footer-col1">
          <div>
            <h2 className="footer-logo-text">IT Innovations</h2>
          </div>
          <p className="footer-p">
            Azərbaycanda ilk və tək uşaqlar üçün blockchain, süni intellekt və
            machine learning tədris edirik.
          </p>
        </div>
        <div className="footer-links-s">
          <div className="footer-col2">
            <h6 className="footer-link-header">Sirket</h6>
            <ul className="footer-link-c">
              <li className="footer-link">Haqqimizda</li>
              <li className="footer-link">Komandamiz</li>
              <li className="footer-link">Teklifler</li>
              <li className="footer-link">Elaqe</li>
            </ul>
          </div>
          <div className="footer-col2">
            <h6 className="footer-link-header">Evler</h6>
            <ul className="footer-link-c">
              <li className="footer-link">Yeni tikili</li>
              <li className="footer-link">Kohne tikili</li>
              <li className="footer-link">Bag evleri</li>
              <li className="footer-link">Ofis</li>
            </ul>
          </div>
          <div className="footer-col2">
            <h6 className="footer-link-header">Desket</h6>
            <ul className="footer-link-c">
              <li className="footer-link">Elaqe</li>
              <li className="footer-link">Komek</li>
              <li className="footer-link">Qaydalar</li>
              <li className="footer-link">Tehlukesizlik</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer