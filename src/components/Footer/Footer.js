import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <ul className="footer-list">
          <li>
            <NavLink to="/" activeClassName="active">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/о-нас" activeClassName="active">О нас</NavLink>
          </li>
          <li>
            <NavLink to="/контакты" activeClassName="active">Контакты</NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-contacts">
        <div className="directions-to-administrator">
          <h4>Контакты</h4>
          <p>Адрес: г. Ваш город, ул. Ваша улица, дом 123</p>
          <p>Телефон: +7 123 456-78-90</p>
          <p>Email: example@example.com</p>
        </div>
      </div>
      <div className="footer-social">
        <h4>Мы в социальных сетях</h4>
        <div className="social-icons">
          <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src="whatsapp-icon.png" alt="WhatsApp" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
