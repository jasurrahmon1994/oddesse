import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gen1 from "../img/gen-1.png";
import Gen2 from "../img/gen-2.png";
import Gen3 from "../img/gen-3.png";

function ProductsPage() {
	return (
		<div className="products-page">
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
				</div>
				<h2 className="title">КАТАЛОГ ПРОДУКЦИИ</h2>
				<div className="product-list">
					<Link to="/products/gen1" className="card">
						<img src={Gen1} alt="product" />
						<h4>ПОГРУЖНЫЕ НАСОСЫ</h4>
					</Link>
					<Link to="/products/gen2" className="card">
						<img src={Gen2} alt="product" />
						<h4>ПРОПЕЛЛЕРНЫЕ НАСОСЫ</h4>
					</Link>
					<Link to="/products/gen3" className="card">
						<img src={Gen3} alt="product" />
						<h4>ПОГРУЖНЫЕ ДВИГАТЕЛИ</h4>
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default ProductsPage;
