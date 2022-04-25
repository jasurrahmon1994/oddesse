import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Tick from "../../img/tick.svg";
function Gen5() {
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
					<Link to="/products/gen5" className="path-link">
						po-mo6.4 • 50 Hz
					</Link>
				</div>
				<h3>po-mo6.4 • 50 Hz • 3 ~ • S.F. 1.0 • Прямое включение</h3>
				<table>
					<thead>
						<th colSpan={2}>Pn</th>
						<th colSpan={2}>220 V</th>
						<th colSpan={2}>230 V</th>
						<th colSpan={2}>380 V</th>
						<th colSpan={2}>415 V</th>
					</thead>
					<tr>
						<td></td>
						<td></td>
						<td>In </td>
						<td>кабель</td>
						<td>In </td>
						<td>кабель</td>
						<td>In </td>
						<td>кабель</td>
						<td>In </td>
						<td>кабель</td>
					</tr>
					<tr>
						<td>kW</td>
						<td>HP</td>
						<td>A </td>
						<td>mm²</td>
						<td>A </td>
						<td>mm²</td>
						<td>A </td>
						<td>mm²</td>
						<td>A </td>
						<td>mm²</td>
					</tr>
					<tr>
						<td>4</td>
						<td>5.5</td>
						<td>18</td>
						<td>1 fl 4 × 2.5</td>
						<td>17.5</td>
						<td>1 fl 4 × 2.5</td>
						<td>10.5</td>
						<td>1 fl 4 × 2.5</td>
						<td>9.5</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>5.5</td>
						<td>7.5</td>
						<td>22</td>
						<td>1 fl 4 × 2.5</td>
						<td>21</td>
						<td>1 fl 4 × 2.5</td>
						<td>13</td>
						<td>1 fl 4 × 2.5</td>
						<td>12</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>7.5</td>
						<td>10</td>
						<td>31</td>
						<td>1 fl 4 × 2.5</td>
						<td>29</td>
						<td>1 fl 4 × 2.5</td>
						<td>18</td>
						<td>1 fl 4 × 2.5</td>
						<td>16</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>9.2</td>
						<td>12.5</td>
						<td>37</td>
						<td>1 fl 4 × 4</td>
						<td>36</td>
						<td>1 fl 4 × 4</td>
						<td>22</td>
						<td>1 fl 4 × 2.5</td>
						<td>20</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>11</td>
						<td>15</td>
						<td>43</td>
						<td>1 fl 4 × 4</td>
						<td>41</td>
						<td>1 fl 4 × 4</td>
						<td>25</td>
						<td>1 fl 4 × 2.5</td>
						<td>23</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>13</td>
						<td>17.5</td>
						<td>53</td>
						<td>1 fl 4 × 6</td>
						<td>50</td>
						<td>1 fl 4 × 6</td>
						<td>30</td>
						<td>1 fl 4 × 2.5</td>
						<td>28</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>15</td>
						<td>20</td>
						<td>59</td>
						<td>1 fl 4 × 6</td>
						<td>56</td>
						<td>1 fl 4 × 6</td>
						<td>34</td>
						<td>1 fl 4 × 2.5</td>
						<td>31</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>18.5</td>
						<td>25</td>
						<td>74</td>
						<td>2 fl 4 × 4*</td>
						<td>70</td>
						<td>2 fl 4 × 4*</td>
						<td>43</td>
						<td>1 fl 4 × 4</td>
						<td>39</td>
						<td>1 fl 4 × 4</td>
					</tr>
					<tr>
						<td>22</td>
						<td>30</td>
						<td>88</td>
						<td>2 fl 4 × 6*</td>
						<td>83</td>
						<td>2 fl 4 × 6*</td>
						<td>51</td>
						<td>1 fl 4 × 6</td>
						<td>46</td>
						<td>1 fl 4 × 4</td>
					</tr>
					<tr>
						<td>26</td>
						<td>35</td>
						<td>105</td>
						<td>2 fl 4 × 6**</td>
						<td>99</td>
						<td>2 fl 4 × 6**</td>
						<td>60</td>
						<td>1 fl 4 × 6</td>
						<td>55</td>
						<td>1 fl 4 × 6</td>
					</tr>
					<tr>
						<td>30</td>
						<td>40</td>
						<td>116</td>
						<td>2 fl 4 × 6**</td>
						<td>110</td>
						<td>2 fl 4 × 6**</td>
						<td>67</td>
						<td>1 fl 4 × 6</td>
						<td>61</td>
						<td>1 fl 4 × 6</td>
					</tr>
					<tr>
						<td>34</td>
						<td>46</td>
						<td>-130</td>
						<td>***</td>
						<td>(123</td>
						<td>***</td>
						<td>75</td>
						<td>2 fl 4 × 4*</td>
						<td>69</td>
						<td>2 fl 4 × 4*</td>
					</tr>
					<tr>
						<td>37</td>
						<td>50</td>
						<td>-142</td>
						<td>***</td>
						<td>(135</td>
						<td>***</td>
						<td>82</td>
						<td>2 fl 4 × 4*</td>
						<td>75</td>
						<td>2 fl 4 × 4*</td>
					</tr>
					<tr>
						<td>45</td>
						<td>60</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td>101</td>
						<td>2 fl 4 × 6</td>
						<td>93</td>
						<td>2 fl 4 × 6</td>
					</tr>
				</table>
				<table>
					<thead>
						<th colSpan={2}>Pn</th>
						<th colSpan={2}>500 V</th>
						<th colSpan={2}>660 V</th>
						<th colSpan={2}>690 V</th>
					</thead>
					<tr>
						<td></td>
						<td></td>
						<td>In </td>
						<td>кабель</td>
						<td>In </td>
						<td>кабель</td>
						<td>In </td>
						<td>кабель</td>
					</tr>
					<tr>
						<td>kW</td>
						<td>HP</td>
						<td>A </td>
						<td>mm²</td>
						<td>A </td>
						<td>mm²</td>
						<td>A </td>
						<td>mm²</td>
					</tr>
					<tr>
						<td>4</td>
						<td>5.5</td>
						<td>8</td>
						<td>1 fl 4 × 2.5</td>
						<td>6</td>
						<td>1 fl 4 × 2.5</td>
						<td>6</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>5.5</td>
						<td>7.5</td>
						<td>10</td>
						<td>1 fl 4 × 2.5</td>
						<td>8</td>
						<td>1 fl 4 × 2.5</td>
						<td>7</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>7.5</td>
						<td>10</td>
						<td>14</td>
						<td>1 fl 4 × 2.5</td>
						<td>10</td>
						<td>1 fl 4 × 2.5</td>
						<td>10</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>9.2</td>
						<td>12.5</td>
						<td>16</td>
						<td>1 fl 4 × 2.5</td>
						<td>13</td>
						<td>1 fl 4 × 2.5</td>
						<td>12</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>11</td>
						<td>15</td>
						<td>19</td>
						<td>1 fl 4 × 2.5</td>
						<td>15</td>
						<td>1 fl 4 × 2.5</td>
						<td>14</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>13</td>
						<td>17.5</td>
						<td>23</td>
						<td>1 fl 4 × 2.5</td>
						<td>18</td>
						<td>1 fl 4 × 2.5</td>
						<td>17</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>15</td>
						<td>20</td>
						<td>26</td>
						<td>1 fl 4 × 2.5</td>
						<td>20</td>
						<td>1 fl 4 × 2.5</td>
						<td>19</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>18.5</td>
						<td>25</td>
						<td>32</td>
						<td>1 fl 4 × 2.5</td>
						<td>25</td>
						<td>1 fl 4 × 2.5</td>
						<td>23</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>22</td>
						<td>30</td>
						<td>38</td>
						<td>1 fl 4 × 4</td>
						<td>29</td>
						<td>1 fl 4 × 2.5</td>
						<td>28</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>26</td>
						<td>35</td>
						<td>46</td>
						<td>1 fl 4 × 4</td>
						<td>35</td>
						<td>1 fl 4 × 2.5</td>
						<td>33</td>
						<td>1 fl 4 × 2.5</td>
					</tr>
					<tr>
						<td>30</td>
						<td>40</td>
						<td>51</td>
						<td>1 fl 4 × 6</td>
						<td>39</td>
						<td>1 fl 4 × 4</td>
						<td>37</td>
						<td>1 fl 4 × 4</td>
					</tr>
					<tr>
						<td>34</td>
						<td>46</td>
						<td>57</td>
						<td>1 fl 4 × 6</td>
						<td>43</td>
						<td>1 fl 4 × 4</td>
						<td>41</td>
						<td>1 fl 4 × 4</td>
					</tr>
					<tr>
						<td>37</td>
						<td>50</td>
						<td>62</td>
						<td>1 fl 4 × 6</td>
						<td>47</td>
						<td>1 fl 4 × 4</td>
						<td>45</td>
						<td>1 fl 4 × 4</td>
					</tr>
					<tr>
						<td>45</td>
						<td>60</td>
						<td>77</td>
						<td>2 fl 4 × 4*</td>
						<td>58</td>
						<td>1 fl 4 × 6</td>
						<td>56</td>
						<td>1 fl 4 × 6</td>
					</tr>
				</table>

				<ul className="features">
					<li>
						<img src={Tick} alt="tick" />
						<p>Pn: номинальная мощность </p>
					</li>
					<li>
						<img src={Tick} alt="tick" />
						<p>In: номинальный ток </p>
					</li>
				</ul>
			</main>
			<Footer />
		</div>
	);
}

export default Gen5;
