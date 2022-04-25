import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
function Pump2() {
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
					<Link to="/products/pump2" className="path-link">
						po-ss/6.2
					</Link>
				</div>
				<h3>po-ss/6.2</h3>
				<h4>Конструктивные материалы</h4>
				<table>
					<thead>
						<th colSpan={3}>DIN</th>
					</thead>
					<tr>
						<td>Компоненты</td>
						<td colSpan={2}>Исполнение</td>
					</tr>
					<tr>
						<td></td>
						<td>Стандарт (AISI 304)</td>
						<td>N-версия (AISI 316)</td>
					</tr>
					<tr>
						<td>Рабочее колесо</td>
						<td>хромистая сталь / 1.4301</td>
						<td>хромистая сталь / 1.4401</td>
					</tr>
					<tr>
						<td>Направляющий аппарат</td>
						<td>хромистая сталь / 1.4301</td>
						<td>хромистая сталь / 1.4401</td>
					</tr>
					<tr>
						<td>Входная часть</td>
						<td>хромистая сталь / 1.4301</td>
						<td>хромистая сталь / 1.4401</td>
					</tr>
					<tr>
						<td>Радиальный подшипник</td>
						<td colSpan={2}>резина NBR / твердый сплав</td>
					</tr>
					<tr>
						<td>Корпус насоса</td>
						<td>хромистая сталь / 1.4301</td>
						<td>хромистая сталь / 1.4401</td>
					</tr>
					<tr>
						<td>Входная сетка </td>
						<td colSpan={2}>хромистая сталь / 1.4401</td>
					</tr>
					<tr>
						<td>Муфта </td>
						<td>хромистая сталь / 1.4057 / 1.4460 </td>
						<td>хромистая сталь / 1.4401 / 1.4460</td>
					</tr>
					<tr>
						<td>Вал </td>
						<td>хромистая сталь / 1.4057 </td>
						<td>хромистая сталь / 1.4460</td>
					</tr>
					<tr>
						<td>Винты, гайки, болты </td>
						<td colSpan={2}>хромистая сталь / 1.4401 см. </td>
					</tr>
					<tr>
						<td>Погружные двигатели</td>
						<td colSpan={2}>раздел погружные двигатели</td>
					</tr>
				</table>
				<table>
					<thead>
						<th colSpan={3}> AISI</th>
					</thead>
					<tr>
						<td>Компоненты</td>
						<td colSpan={2}>Исполнение</td>
					</tr>
					<tr>
						<td></td>
						<td>Стандарт (AISI 304)</td>
						<td>N-версия (AISI 316)</td>
					</tr>
					<tr>
						<td>Рабочее колесо</td>
						<td>хромистая сталь / AISI 304</td>
						<td>хромистая сталь / AISI 316</td>
					</tr>
					<tr>
						<td>Направляющий аппарат</td>
						<td>хромистая сталь / AISI 304</td>
						<td>хромистая сталь / AISI 316</td>
					</tr>
					<tr>
						<td>Входная часть</td>
						<td>хромистая сталь / AISI 304</td>
						<td>хромистая сталь / AISI 316</td>
					</tr>
					<tr>
						<td>Радиальный подшипник</td>
						<td colSpan={2}>резина NBR / твердый сплав</td>
					</tr>
					<tr>
						<td>Корпус насоса</td>
						<td>хромистая сталь / AISI 304</td>
						<td>хромистая сталь / AISI 316</td>
					</tr>
					<tr>
						<td>Входная сетка </td>
						<td colSpan={2}>хромистая сталь / AISI 316</td>
					</tr>
					<tr>
						<td>Муфта </td>
						<td>хромистая сталь / AISI 431 / 329 </td>
						<td>хромистая сталь / AISI 316 / 329</td>
					</tr>
					<tr>
						<td>Вал </td>
						<td>хромистая сталь / AISI 431 </td>
						<td>хромистая сталь / AISI 329</td>
					</tr>
					<tr>
						<td>Винты, гайки, болты </td>
						<td colSpan={2}>хромистая сталь / AISI 316 </td>
					</tr>
					<tr>
						<td>Погружные двигатели</td>
						<td colSpan={2}>раздел погружные двигатели</td>
					</tr>
				</table>
			</main>
			<Footer />
		</div>
	);
}

export default Pump2;
