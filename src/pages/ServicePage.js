import React from 'react'
import Support from '../img/support.svg'
import Collobaration from '../img/collobaration.svg'
import Cycle from '../img/cycle.svg'
import Delivery from '../img/delivery.svg'
import System from '../img/system.svg'
import Education from '../img/education.svg'
import Technical from '../img/technical.svg'
import Location from '../img/location.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
function ServicePage() {
  return (
		<div className="service-page">
			<Header />
			<main>
				<div className="path">
					<Link to="/" className="path-link">
						Главная
					</Link>
					<span>/</span>
					<Link to="/service" className="path-link">
						Услуги
					</Link>
				</div>
				<h2 className="title">УСЛУГИ </h2>
				<h3 className="subtitle">
					Проект фокусируется на обеспечении рынка продукцией с высоким качеством за счет трансфера технологий
					oddesse Pumpen- und Motorenfabrik GmbH (Германия) и обеспечения конкурентной стоимости продукции.
				</h3>
				<div className="cards">
					<div className="card">
						<img src={Support} alt="support" />
						<p>Квалифицированная консультация и техническое обслуживание 24/7</p>
					</div>
					<div className="card">
						<img src={Cycle} alt="Cycle" />
						<p>Сопровождение продуктов на протяжении всего жизненного цикла</p>
					</div>
					<div className="card">
						<img src={Collobaration} alt="Collobaration" />
						<p>
							Совместная разработка подходящего
							технического решения
						</p>
					</div>
					<div className="card">
						<img src={Technical} alt="Technical" />
						<p>Техническая помощь при монтажных и пусконаладочных работах</p>
					</div>
					<div className="card">
						<img src={Location} alt="Location" />
						<p>Профилактическое техобслуживание в ремонтной мастерской или на месте</p>
					</div>
					<div className="card">
						<img src={Delivery} alt="Delivery" />
						<p>
							Организация склада ЗИП, быстрое и качественное предоставление запасных частей, насосов и
							двигателей
						</p>
					</div>
					<div className="card">
						<img src={System} alt="System" />
						<p>Готовность предоставления систем для проведения ОПИ</p>
					</div>
					<div className="card">
						<img src={Education} alt="Education" />
						<p>Комплексное обучение  и подготовка персонала к работе с оборудованием</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
  );
}

export default ServicePage