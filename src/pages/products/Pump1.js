import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tick from "../../img/tick.svg";
import { Link } from "react-router-dom";
function Pump1() {
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
					<Link to="/products/pump1" className="path-link">
						po-ss/6.2
					</Link>
				</div>
				<h3>po-ss/6.2</h3>
				<h4>Спецификация</h4>
				<ul className="features">
					<li>
						<img src={Tick} alt="tick" />
						<p>
							Многоступенчатый центробежный насосный агрегат с кожухной конструкцией и с погружным
							двигателем-оddessе;{" "}
						</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p> Отвод давления с помощью интегрированного обратного клапана;</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Привод с помощью двигателей трехфазного тока; </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Минимальное погружение насосного агрегата в воду 2 м; </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Минимальная скорость обтекания вдоль двигателя 0.5 м/сек.; </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p> Максимальная температура среды 30 °C; </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Чистая вода с твердыми примесями до макс. 100 мг/л; </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>
							Стандартное подключение: R = G2 ½ po-ss-13/6.2 и – 18/6.2 (трубная резьба по DIN ISO 228 T1)
							R = G3 po-ss-30/6.2, -45/6.2 и – 60/6.2;{" "}
						</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p> По опциону G3, G4 и NPT-резьба по запросу; </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Другие подключения могут поставляться в качестве принадлежностей; </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Приемка по DIN EN ISO 9906 Класс 2; </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Особые исполнения по запросу (горизонтальное применение и т. д.) </p>
					</li>
				</ul>
				<h4>Основные габаритные размеры</h4>
				<ul className="features">
					<li>
						<img src={Tick} alt="tick" />
						<p>E = 181 mm у po-mo8</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>E = 141 мм у po-mo6</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>E = 92.4 мм у po-mo4 </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>C = 189 mm у po-mo8 </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>C = 149 мм у 2 кабелей</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>C = 147 мм у 1 кабеля</p>
					</li>
				</ul>
				<table>
					<thead>
						<th colSpan={7}>Адаптер</th>
					</thead>
					<tr>
						<td>Резьба фланец</td>
						<td colSpan={6}>Размеры</td>
					</tr>
					<tr>
						<td></td>
						<td>D [мм]</td>
						<td>b [мм]</td>
						<td>k [мм]</td>
						<td>d4 [мм]</td>
						<td>d2 [мм]</td>
						<td>м [кг]</td>
					</tr>
					<tr>
						<td>G2 ½ DN50, PN16</td>
						<td>165</td>
						<td>18</td>
						<td>125</td>
						<td>102</td>
						<td>4×ø18</td>
						<td>3.5</td>
					</tr>
					<tr>
						<td>G2 ½ DN50, PN40</td>
						<td>165</td>
						<td>20</td>
						<td>125</td>
						<td>102</td>
						<td>4×ø18</td>
						<td>3.7</td>
					</tr>
					<tr>
						<td>G3 DN65, PN16</td>
						<td>185</td>
						<td>18</td>
						<td>145</td>
						<td>122</td>
						<td>4×ø18</td>
						<td>4.1</td>
					</tr>
					<tr>
						<td>G3 DN65, PN40</td>
						<td>185</td>
						<td>22</td>
						<td>145</td>
						<td>122</td>
						<td>8×ø18</td>
						<td>4.3</td>
					</tr>
					<tr>
						<td>G3 DN80, PN16</td>
						<td>200</td>
						<td>20</td>
						<td>160</td>
						<td>138</td>
						<td>8×ø18</td>
						<td>4.7</td>
					</tr>
					<tr>
						<td>G3 DN80, PN40</td>
						<td>200</td>
						<td>24</td>
						<td>160</td>
						<td>138</td>
						<td>8×ø18</td>
						<td>5.7</td>
					</tr>
					<tr>
						<td>G3 DN100, PN16</td>
						<td>220</td>
						<td>20</td>
						<td>180</td>
						<td>158</td>
						<td>8×ø18</td>
						<td>6.1</td>
					</tr>
					<tr>
						<td>G3 DN100, PN40</td>
						<td>235</td>
						<td>24</td>
						<td>190</td>
						<td>162</td>
						<td>8×ø22</td>
						<td>8</td>
					</tr>
				</table>
				<ul className="features">
					<li>
						<img src={Tick} alt="tick" />
						<p>Размеры фланца по DIN 2633 (PN16) и DIN 2635 (Pn40).</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Исполнение материалов: из нержавеющей стали.</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>PN номинальное давление (бар)</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p> DN номинальный диаметр (мм)</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p> b толщина фланца (мм), м масса (кг).</p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Каждый фланец с 2 кабельными пазами.</p>
					</li>
				</ul>
			</main>
			<Footer />
		</div>
	);
}

export default Pump1;
