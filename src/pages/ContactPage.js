import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mail from "../img/email.svg"
import Mobile from "../img/mobile.svg"
import Fbook from "../img/fbook.svg"
import Tg from "../img/tg.svg"
import Lin from "../img/lin.svg"
import { Link } from "react-router-dom";
function ContactPage() {
  return (
		<div className="contact-page">
			<Header />
			<main>
				<div className="path">
					<Link to="/" className="path-link">
						Главная
					</Link>
					<span>/</span>
					<Link to="/contact" className="path-link">
						Контакты
					</Link>
				</div>
				<h2 className="title">КОНТАКТЫ </h2>
				<h3 className="subtitle">Свяжитесь с нами, чтобы получить желаемый насос</h3>
				<div className="connections">
					<a href="mailto:info@oddesse.uz" className="connection">
						<div className="img">
							<img src={Mail} alt="mail" />
						</div>
						<p>EMAIL</p>
						<a>info@uzoddesse.uz </a>
					</a>
					<a href="tel:+998993532370" className="connection">
						<div className="img">
							<img src={Mobile} alt="mobile" />
						</div>
						<p>PHONE</p>
						<a>+998 99 353 23 70 </a>
					</a>
					<a href="#!" className="connection">
						<div className="img">
							<img src={Fbook} alt="facebook" />
						</div>
						<p>FACEBOOK</p>
						<a>@uzoddesse.uz </a>
					</a>
					<a href="#!" className="connection">
						<div className="img">
							<img src={Tg} alt="telegram" />
						</div>
						<p>TELEGRAM</p>
						<a>@uzoddesse.uz </a>
					</a>
					<a href="#!" className="connection">
						<div className="img">
							<img src={Lin} alt="linkedin" />
						</div>
						<p>LINKEDIN</p>
						<a>uzoddesse.uz</a>
					</a>
				</div>
				<div className="maps">
					<div className="map">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.952976171858!2d69.28984771542345!3d41.3098865792713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4d5b94cad3f%3A0x1f8436bbc30a7973!2zNTAgU29kaXEgQXppbW92IGtvJ2NoYXNpLCDQotC-0YjQutC10L3Rgg!5e0!3m2!1sen!2s!4v1648367518913!5m2!1sen!2s"></iframe>
						<div className="link">
							<h4>ИП ООО «VIK Engineering» Офис</h4>
							<a href="https://goo.gl/maps/QNmJ4gTzFpRNyCDT6">
								Узбекистан г.Ташкент Яшнабадский район, 100047 С.Азимова 50
							</a>
						</div>
					</div>
					<div className="map">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.8894043826986!2d65.36172731503196!3d40.10017868275511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f51c6c463a0d239%3A0xc8b70c3c70cff9d3!2sNavoiy%20City%20Government%20Building!5e0!3m2!1sen!2s!4v1648367977605!5m2!1sen!2s"></iframe>
						<div className="link">
							<h4>Производственная база</h4>
							<a href="https://goo.gl/maps/NDPosGn9A5pg3bRh9">
								Навоийская область, Навбахорский р-н., Коражон м.ф.й.
							</a>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
  );
}

export default ContactPage