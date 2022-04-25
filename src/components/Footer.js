import React from 'react';
import Mail from '../img/mail.svg';
import Phone from "../img/phone.svg";
import Linkedin from "../img/linkedin.svg";
import Telegram from "../img/telegram.svg";
import Facebook from "../img/facebook.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
		<footer>
			<div className="f-link block">
				<p> ИП ООО «VIK Engineering» © 2022 </p>
				<p>Все права защищены.</p>
			</div>
			<div className="f-link block">
				<a href="tel:+998993532370" className="connection">
					<img src={Phone} alt="mail" />
					<p>+998 99 353 23 70</p>
				</a>
				<a href="mailto:info@oddesse.uz" className="connection">
					<img src={Mail} alt="mail" />
					<p>info@oddesse.uz</p>
				</a>
			</div>
			<div className="f-link">
				<Link to="/connect" className="link">ОБРАТНАЯ СВЯЗЬ </Link>
                <span></span>
				<Link to="/vacancy" className="link">ВАКАНСИИ</Link>
			</div>
            <div className="f-link">
                <a href="#!" className='social'>
                    <img src={Telegram} alt="telegram" />
                </a>
                <a href="#!" className='social'>
                    <img src={Linkedin} alt="linkedin" />
                </a>
                <a href="#!" className='social'>
                    <img src={Facebook} alt="facebook" />
                </a>
            </div>
		</footer>
  );
}

export default Footer