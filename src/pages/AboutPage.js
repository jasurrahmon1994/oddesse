import React from 'react'
import AboutImg from "../img/about.jpg"
import Tick from "../img/tick.svg"
import Partner1 from "../img/partner-1.jpg"
import Partner2 from "../img/partner-2.jpg"
import Partner3 from "../img/partner-3.jpg"
import Partner4 from "../img/partner-4.jpg"
import Partner5 from "../img/partner-5.jpg"
import Partner6 from "../img/partner-6.jpg"
import Partner7 from "../img/partner-7.jpg"
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from "react-router-dom";

function AboutPage() {
  return (
		<div className="about-page">
			<Header />
			<main>
				<div className="path">
					<Link to="/" className="path-link">
						Главная
					</Link>
					<span>/</span>
					<Link to="/about" className="path-link">
						О компании
					</Link>
				</div>
				<h2 className="title">О КОМПАНИИ </h2>
				<h3 className="subtitle">
					Производство центробежных насосов погружных электродвигателей для агрессивных сред горнодобывающей
					отрасли и водного хозяйства
				</h3>
				<div className="img-text">
					<div className="text">
						<p>
							ИП ООО «VIK Engineering» является производственной компанией, которая специализируется на
							производстве химическостойких погружных насосов для агрессивных сред для нужд
							горнодобывающей отрасли и водного хозяйства под брендом Uzoddesse. Проект фокусируется на
							обеспечении рынка продукцией с высоким качеством за счет трансфера технологий oddesse
							Pumpen- und Motorenfabrik GmbH (Германия) и обеспечения конкурентной стоимости продукции.
						</p>
						<br />
						<p>
							Данный проект разработан в соответствии с Постановлением Президента Республики Узбекистан «О
							мерах по дальнейшему развитию промышленной кооперации и расширению производства
							востребованной продукции» №ПП-4302 от 01.05.2019.
						</p>
					</div>
					<div className="img">
						<img src={AboutImg} alt="company" />
					</div>
				</div>
				<h3 className="sec-title">Выпускаемая продукция</h3>
				<ul className="product-list">
					<li>
						<img src={Tick} alt="tick" />
						<p>Одноступенчатые центробежные насосы</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Многоступенчатые центробежные насосы;</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Погружные электродвигатели</p>
					</li>
				</ul>
				<h3 className="sec-title">Наши партнёры</h3>
				<div className="partners">
					<Swiper
						modules={[Autoplay]}
						spaceBetween={0}
						slidesPerView={5}
						speed={1500}
						loop={false}
						autoplay={true}
						breakpoints={{
							1200: {
								width: 1200,
								slidesPerView: 5,
							},
							768: {
								width: 768,
								slidesPerView: 4,
							},
							600: {
								width: 600,
								slidesPerView: 3,
							},
							350: {
								width: 350,
								slidesPerView: 2,
							},
							320: {
								width: 320,
								slidesPerView: 2,
							},
						}}
					>
						<SwiperSlide>
							<div className="img">
								<img src={Partner1} alt="partner" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img">
								<img src={Partner2} alt="partner" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img">
								<img src={Partner3} alt="partner" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img">
								<img src={Partner4} alt="partner" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img">
								<img src={Partner5} alt="partner" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img">
								<img src={Partner6} alt="partner" />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="img">
								<img src={Partner7} alt="partner" />
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</main>
			<Footer />
		</div>
  );
}

export default AboutPage