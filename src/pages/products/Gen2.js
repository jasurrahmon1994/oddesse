import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tick from "../../img/tick.svg";
import { Link } from "react-router-dom";

function Gen2() {
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
						po-mo6.4 • 60 Hz
					</Link>
				</div>
				<h3>po-mo6.4 • 60 Hz • 3 ~ • S.F. 1.0</h3>
				<table>
					<thead>
						<th colSpan={2}>Мощность P</th>
						<th colSpan={2}>Длина l</th>
						<th colSpan={2}>Масса m</th>
					</thead>
					<tr>
						<td>kW</td>
						<td>HP</td>
						<td>mm</td>
						<td>inch</td>
						<td>kg </td>
						<td>lbs</td>
					</tr>
					<tr>
						<td>4.6</td>
						<td>6.3</td>
						<td>654</td>
						<td>25.7</td>
						<td>40</td>
						<td>88</td>
					</tr>
					<tr>
						<td>6.3</td>
						<td>8.5</td>
						<td>697</td>
						<td>27.4</td>
						<td>44</td>
						<td>97</td>
					</tr>
					<tr>
						<td>8.5</td>
						<td>11.5</td>
						<td>729</td>
						<td>28.7</td>
						<td>48</td>
						<td>106</td>
					</tr>
					<tr>
						<td>11</td>
						<td>15</td>
						<td>769</td>
						<td>30.3</td>
						<td>52</td>
						<td>115</td>
					</tr>
					<tr>
						<td>13</td>
						<td>17.5</td>
						<td>854</td>
						<td>33.6</td>
						<td>60</td>
						<td>132</td>
					</tr>
					<tr>
						<td>15</td>
						<td>20</td>
						<td>889</td>
						<td>35</td>
						<td>64</td>
						<td>141</td>
					</tr>
					<tr>
						<td>17</td>
						<td>23</td>
						<td>939</td>
						<td>37</td>
						<td>69</td>
						<td>152</td>
					</tr>
					<tr>
						<td>20</td>
						<td>27</td>
						<td>1004</td>
						<td>39.5</td>
						<td>76</td>
						<td>168</td>
					</tr>
					<tr>
						<td>25</td>
						<td>34</td>
						<td>1079</td>
						<td>42.5</td>
						<td>83</td>
						<td>183</td>
					</tr>
					<tr>
						<td>30</td>
						<td>40</td>
						<td>1149</td>
						<td>45.2</td>
						<td>89</td>
						<td>196</td>
					</tr>
					<tr>
						<td>34</td>
						<td>46</td>
						<td>1259</td>
						<td>49.6</td>
						<td>97</td>
						<td>214</td>
					</tr>
					<tr>
						<td>37</td>
						<td>50</td>
						<td>1309</td>
						<td>51.5</td>
						<td>101</td>
						<td>223</td>
					</tr>
					<tr>
						<td>45</td>
						<td>60</td>
						<td>1389</td>
						<td>54.7</td>
						<td>106</td>
						<td>234</td>
					</tr>
				</table>
				<ul className="features">
					<li>
						<img src={Tick} alt="tick" />
						<p>Давление вниз (до 15 kW): 15 kN / 3300 lbs </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Давление вниз (свыше 15 kW): 23 kN / 5100 lbs </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>Давление вверх: 0.5 kN / 110 lbs</p>
					</li>
				</ul>
			</main>
			<Footer />
		</div>
	);
}

export default Gen2;
