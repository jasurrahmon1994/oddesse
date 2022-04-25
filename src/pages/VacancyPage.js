import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Vacancy from "../img/vacancy.jpg"
import { Link } from "react-router-dom";
function VacancyPage() {
  return (
		<div className="vacancy-page">
			<Header />
			<main>
				<div className="path">
					<Link to="/" className="path-link">
						Главная
					</Link>
					<span>/</span>
					<Link to="/vacancy" className="path-link">
						Вакансии
					</Link>
				</div>
				<h2 className="title">мы нанимаем </h2>
				<div className="img-text">
					<div className="text">
						<h3>Горячая вакансия</h3>
						<p>
							Если вы заинтересованы в [человеческих ресурсах] и увлечены [улучшением рабочей среды и
							повышением производительности сотрудников], мы хотели бы связаться с вами! Мы предлагаем
							яркое рабочее место с [бесплатным утренним кофе и обедом], а также [оплачиваемые дни и
							профессиональное обучение].
						</p>
						<a href="/vacancy.pdf" target="_blank">Скачать pdf</a>
					</div>
					<div className="img">
						<img src={Vacancy} alt="vacancy" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
  );
}

export default VacancyPage