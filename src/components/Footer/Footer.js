import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {

return (
<footer className="footer">
<div className="footer-container">
<div className="footer-column">
<h4 className="footer-heading">Меню</h4>
<ul className="footer-list">
<li>
<NavLink to="/">Главная</NavLink>
</li>
<li>
<NavLink to="/about">О нас</NavLink>
</li>
<li>
<NavLink to="/contact">Контакты</NavLink>
</li>
<li>
<NavLink to="/deliver">Доставка</NavLink>
</li>
<li>
<NavLink to="/orders">Заказы</NavLink>
</li>
</ul>
</div>
<div className="footer-column">
<h4 className="footer-heading">Контакты</h4>
<div className="directions-to-administrator">
<a className="Tel" target="_blank" rel="noreferrer" href="https://www.google.com/maps?q=42.499292,%2078.412108">Геодезическая 12</a>
<a className="Tel" target="_blank" rel="noreferrer" href="tel:+996 500 92 37 37">+996 708 76 76 76</a>
<a className="Tel" target="_blank" rel="noreferrer" href="mailto:orozobekovdosbol07@gmail.com">almanbetovaidin@gmail.com</a>
</div>
</div>
<div className="footer-column">
<h4 className="footer-heading">Мобильные сети</h4>
<div className="network-icons">
<a
           href="https://api.whatsapp.com/send?phone=996500923737"
           target="_blank"
           rel="noreferrer"
         >
<svg
             xmlns="http://www.w3.org/2000/svg"
             x="0px"
             y="0px"
             width="50"
             height="50"
             viewBox="0 0 24 24"
             fill="#fff"
           >
<path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171