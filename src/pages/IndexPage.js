import React from "react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroImg from "../img/intro-1.jpg";
import IntroImg2 from "../img/intro-2.jpg";

function IndexPage() {
	return (
		<>
			<Header />
			<div className="wrapper">
				<Swiper
					modules={[Pagination, EffectFade, Autoplay]}
					spaceBetween={0}
					slidesPerView={1}
					speed={1000}
					loop={true}
					autoplay={true}
					effect={"fade"}
					pagination={{ clickable: true }}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="img">
							<img src={IntroImg} alt="truba" />
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="img">
							<img src={IntroImg2} alt="truba" />
						</div>
					</SwiperSlide>
				</Swiper>
				<div className="text">
					<h1 className="main-title"> UZODESSE</h1>
					<h2>
						Производство центробежных насосов, погружных электродвигателей для агрессивных сред горнодобывающей отрасли
					</h2>
				</div>
				<aside className="left"></aside>
				<aside className="right"></aside>
				<div className="flip-cards">
					<div className="flip">
						<div className="front first">
							<h4 className="text-shadow">Широкое применение</h4>
						</div>
						<div className="back">
							<h4>Широкое применение</h4>
							<p>
								Погружные насосы и погружные двигатели широко используются в сфере водоснабжения и
								водоотведения, в промышленности и сельском хозяйстве, горнодобывающей промышленности.
							</p>
						</div>
					</div>
					<div className="flip">
						<div className="front second">
							<h4 className="text-shadow">Tрадиции высокого качества</h4>
						</div>
						<div className="back">
							<h4>Tрадиции высокого качества</h4>
							<p>
								Качество нашей продукции и наших услуг определяются ожиданиями рынка, правовыми нормами,
								техническими правилами, а также условиями охраны окружающей среды и безопасности.
							</p>
						</div>
					</div>
					<div className="flip">
						<div className="front third">
							<h4 className="text-shadow">В интересах заказчиков</h4>
						</div>
						<div className="back">
							<h4>В интересах заказчиков</h4>
							<p>
								обладая современным технологическим оборудованием, а также современной системой
								управления производством, компания оперативно реагирует на пожелания заказчиков.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default IndexPage;
