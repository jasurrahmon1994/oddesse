import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tick from "../../img/tick.svg";
import { Link } from "react-router-dom";
import GenPic3 from "../../img/gen-3.png";
import GenInfo3 from "../../img/gen-info-3.png";
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
					<Link to="/products/gen3" className="path-link">
						Погружные двигатели
					</Link>
				</div>
				<h2>ПОГРУЖНЫЕ ДВИГАТЕЛИ</h2>
				<h3>В соответствии с наивысшими мировыми требованиями</h3>
				<div className="info">
					<div className="img">
						<img src={GenPic3} alt="product" />
					</div>
					<div className="text">
						<h4>Типы: po-mo / po-moh</h4>
						<h4>Рабочие характеристики</h4>
						<ul className="features">
							<li>
								<img src={Tick} alt="tick" />
								<p>мощность: до 400 кВт </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>напряжения: до 1000 В</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>вид тока: 3 ~ частота: 50 и 60 Гц </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>вид защиты: IP 68 </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>температура: до 30 °C / 50 °C (выше по запросу)</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>частота включений: макс. 20 / час (po-mo12 макс. 10 / час) </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>число оборотов: 2850 1/мин и 3460 1/мин</p>
							</li>

							<li>
								<img src={Tick} alt="tick" />
								<p>Вес: до 590 кг</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="accordion">
					<Collapsible trigger="Области применения">
						<ul className="features">
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Приводной двигатель для всех погружных насосов, присоединительные размеры которых
									соответствуют нормам NEMA или международным стандартам
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Привод насосов, работающих в особых условиях горного дела, оффшорной промышленности,
									при использовании тепла геотермальных источников
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Приводные двигатели скважинных насосов для перекачивания воды</p>
							</li>
						</ul>
					</Collapsible>
					<Collapsible trigger="Преимущества">
						<ul className="features">
							<li>
								<img src={Tick} alt="tick" />
								<p>Одни из наилучших в мире рабочих характеристик двигателей</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Вращение двигателя в любом направлении</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Простое использование, не требующее техобслуживания, длительный срок службы</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Удобство в проведении сервисных работ благодаря модульной конструкции,
									обеспечивающей взаимозаменяемость деталей
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Возможен полный рециклинг двигателей</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Экологичность благодаря использованию физиологически безопасных материалов,
									энергоэффективность, высокая коррозионная стойкость
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Хорошая сервисная сеть</p>
							</li>
						</ul>
					</Collapsible>
					<Collapsible trigger="Исполнения">
						<ul className="features">
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Асинхронные двигатели трехфазного тока с заполнением водой для напряжений до 1000 В,
									а также для 50 и 60 Гц
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Статоры с заменяемой обмоткой и динамически сбалансированные мокрые роторы,
									устойчивые к термонагрузкам{" "}
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Высококачественные упорные подшипники с высокой допустимой нагрузкой, обеспечивающие
									вращение двигателя в любом направлении{" "}
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Смазываемые водой радиальные подшипники для установки двигателей в горизонтальном
									или вертикальном положении
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Возможно исполнение обмотки для температуры перекачиваемой среды до 80 °C</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Возможно регулирование частоты вращения с помощью частотного преобразователя в
									пределах от 30 до 60 Гц
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Высококачественные материалы для использования в хозяйственной, промышленной и
									морской воде
								</p>
							</li>
						</ul>
					</Collapsible>
				</div>
				<div className="info-img">
					<h3>Серии</h3>
					<div className="img">
						<img src={GenInfo3} alt="graph" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Gen1;
