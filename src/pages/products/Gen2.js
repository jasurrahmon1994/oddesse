import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tick from "../../img/tick.svg";
import { Link } from "react-router-dom";
import GenPic2 from "../../img/gen-2.png";
import GenInfo2 from "../../img/gen-info-2.png";
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
					<Link to="/products/gen2" className="path-link">
						Пропеллерные насосы
					</Link>
				</div>
				<h2>ПРОПЕЛЛЕРНЫЕ НАСОСЫ</h2>
				<h3>Многопрофильное применение</h3>
				<div className="info">
					<div className="img">
						<img src={GenPic2} alt="product" />
					</div>
					<div className="text">
						<h4>Тип: po-upl</h4>
						<h4>Технические характеристики</h4>
						<ul className="features">
							<li>
								<img src={Tick} alt="tick" />
								<p>Подача: до 1000 м3/час</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Напор: до 28 м</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Высота всасывания: до 3 м</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Номинальная мощность: до 30-22 кВт </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Номинальный ток: до 61 A при 400 V </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Номинальное число оборотов: 1450 1/мин </p>
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
								<p>Орошение и осушение сельскохозяйственных площадей</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Регулирование уровня воды</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Циркуляция воды в очистных сооружениях</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Обогащение кислородом водоемов рыборазведения</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Спуск и наполнение резервуаров</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Чистая или слабо загрязненная вода с содержанием твердых частиц до 50 мг/л</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Пресная, морская и солоноватая вода </p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Температура перекачиваемой среды до 50 °C</p>
							</li>
						</ul>
					</Collapsible>
					<Collapsible trigger="Преимущества">
						<ul className="features">
							<li>
								<img src={Tick} alt="tick" />
								<p>Возможность вертикальной и горизонтальной установки</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Возможен монтаж насоса непосредственно на трубопроводе, а также его использование в
									качестве погружного насоса
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Возможно, тандемное и последовательное расположени</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Отличное охлаждение двигателя благодаря заполнению его водой, а также обтеканию
									перекачиваемой жидкостью снаружи
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Торцевое уплотнение обеспечивает герметичность двигателя, отсутствует выход вала
									наружу
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Возможно регулирование с помощью частотного преобразователя</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Длительная работа без техобслуживания</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Небольшие затраты на ремонт</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Низкие капиталовложения и эксплуатационные расходы</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Экологичность – возможность полного рециклинга</p>
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
								<p>Одноступенчатые центробежные насосы с открытым полуосевым рабочим колесом</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Погружные двигатели с мокрым ротором и заменяемой обмоткой, степень защиты IP 68</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Охлаждение двигателей за счет обтекания перекачиваемой средой</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Смазываемые водой радиальные и упорные подшипники скольжения</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Торцевое уплотнение обеспечивает герметичность двигателя</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Оптимальное заполнение двигателя благодаря системе выравнивания давления,
									компенсирующей объем
								</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>Герметично присоединенный электрический кабель</p>
							</li>
							<li>
								<img src={Tick} alt="tick" />
								<p>
									Непрерывный режим работы, режим переключения или преобразования частоты ⦁ Тандемный
									режим работы
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
					<h3>График мощности (напор и подача)</h3>
					<div className="img">
						<img src={GenInfo2} alt="graph" />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Gen1;
