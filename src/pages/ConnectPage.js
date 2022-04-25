import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";
function ConnectPage() {
	const sendEmail = e => {
		e.preventDefault();
emailjs.sendForm("service_eqpgllt", "template_8c6gd4t", e.target, "4Nv2XGmbkCGuMEhtj").then(() => {
	document.querySelector(".connect-page .title").classList.add('green');
	document.querySelector(".connect-page .subtitle").classList.add('green');
	document.querySelector(".connect-page .title").innerHTML = "Ваш запрос отправлен.";
	document.querySelector(".connect-page .subtitle").innerHTML = "Мы свяжемся с вами в кратчайшие сроки.";
	document.querySelector('.connect-page form').style.display = "none";
}).catch(() => {
	document.querySelector(".connect-page .title").innerHTML = "Ваш запрос не отправлен.";
});
	}
  return (
		<div className="connect-page">
			<Header />
			<main>
				<div className="path">
					<Link to="/" className="path-link">
						Главная
					</Link>
					<span>/</span>
					<Link to="/connect" className="path-link">
						Обратная связь
					</Link>
				</div>
				<h2 className="title">ОБРАТНАЯ СВЯЗЬ </h2>
				<h3 className="subtitle">Заполните эту форму, чтобы связаться с нами</h3>
				<h3 className="form-text"></h3>
				<form onSubmit={sendEmail}>
					<input type="text" id="username" placeholder="Ваше имя" name="username" required />
					<span></span>
					<input type="tel" id="userphone" required name="userphone" placeholder="Ваш телефон" />
					<span></span>
					<input type="email" id="useremail" required name="useremail" placeholder="Эл. адрес" />
					<span></span>
					<textarea name="usertext" id="usertext" cols="30" rows="10" placeholder="Ваше сообщение"></textarea>
					<button type="submit">Отправить</button>
				</form>
			</main>
			<Footer />
		</div>
  );
}

export default ConnectPage