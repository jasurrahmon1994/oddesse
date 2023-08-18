import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tick from "../../img/tick.svg";
import { Link } from "react-router-dom";
import GenPic1 from "../../img/gen-1.png";
import GenInfo1 from "../../img/gen-info-1.png";
import Collapsible from "react-collapsible";
function Gen1() {
	return (
		<div className="inner-page">
			<Header />
			<main>
				<div className="path">
					<Link to="/" className="path-link">
						Главная
					</Link>
					<span>/</span>
					<Link to="/products" className="path-link">
						Каталог продукции
					</Link>
					<span>/</span>
					<Link to="/products/gen1" className="path-link">
						Погружные насосы
					</Link>
				</div>
				<h2>ПОГРУЖНЫЕ НАСОСЫ</h2>
				<h3>Гарантированная надежная работа</h3>
				<div className="info">
					<div className="img">
						<img src={GenPic1} alt="product" />
					</div>
					<div className="text">
						<h4>Типы: po-so / po-ss</h4>
						<h4>Технические характеристики</h4>
						<ul className="features">
							<li>
								<img src={Tick} alt="tick" />
								<p>Подача: до 1200 м3/час</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Напор: до 600 м</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Мощность: до 450 кВт</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Напряжение: до 1000 B </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Вид тока: 1~ & 3~</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Частота: 50 & 60 Hz </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Класс защиты: IP 68 </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Температура применения: до 80 °C</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="accordion">
					<Collapsible trigger="Области применения">
						<ul className="features">
							<li>
								<img src={Tick} alt="tick" />
								<p>Насосные станции питьевого водоснабжения</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Орошение и осушение</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Дождевальные установки</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Водоотлив в горном деле и подземном строительстве</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Перекачивание хозяйственной воды в промышленности и на электростанциях</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Системы повышения давления</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Использование геотермальных вод</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Перекачивание химически загрязненных вод</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Техника для защиты окружающей среды</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Чистая или слабо загрязненная вода с содержанием твердых частиц до 50 мг/л </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Пресная, морская и солоноватая вода</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Температура перекачиваемой среды до 80 °C</p>
							</li>
						</ul>
					</Collapsible>
					<Collapsible trigger="Преимущества">
						<ul className="features">
							<li>
								<img src={Tick} alt="tick" />
								<p>Небольшой внешний диаметр</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Вертикальная или горизонтальная установка</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Низкие капиталовложения и эксплуатационные расходы </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Длительная работа без техобслуживания</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Возможно регулирование с помощью частотного преобразователя ⦁ Небольшие затраты на
									ремонт
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Небольшой ассортимент запчастей за счет модульной конструкции</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Экологичность и возможность рециклинга</p>
							</li>
						</ul>
					</Collapsible>
					<Collapsible trigger="Исполнения">
						<ul className="features">
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Многоступенчатые центробежные насосы кожухотрубной и секционной конструкции с
									радиальными и полуосевыми рабочими колесами
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Двигатели с мокрым ротором с заменяемой обмоткой</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Двигатели согласно норме NEMA или международным стандартам</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Напорные патрубки с трубной резьбой или фланцем</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Высококачественные материалы для использования в хозяйственной, промышленной,
									геотермальной и морской воде
								</p>
							</li>
						</ul>
					</Collapsible>
				</div>
				<div className="info-img">
					<h3>График мощности (напор и подача)</h3>
					<div className="img">
						<img src={GenInfo1} alt="graph" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Gen1;
