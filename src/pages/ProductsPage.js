import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Generator from "../img/generator.png";
import Pump from "../img/pump.png";
import Gen1 from "../img/gen-1.png";
import Pump1 from "../img/pump-1.png";

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
					<Tabs>
						<TabList>
							<Tab>
								<img src={Generator} alt="generator" />
								<p>ПОГРУЖНЫЕ ДВИГАТЕЛИ</p>
							</Tab>
							<Tab>
								<img src={Pump} alt="pump" />
								<p>ПОГРУЖНЫЕ НАСОСЫ</p>
							</Tab>
						</TabList>
						<TabPanel>
							<Link to="/products/gen1" className="card">
								<img src={Gen1} alt="product" />
								<h4>po-mo6.4 • 50 Hz • 3 ~ • S.F. 1.0</h4>
							</Link>
							<Link to="/products/gen2" className="card">
								<img src={Gen1} alt="product" />
								<h4>po-mo6.4 • 60 Hz • 3 ~ • S.F. 1.0</h4>
							</Link>
							<Link to="/products/gen3" className="card">
								<img src={Gen1} alt="product" />
								<h4>po-mo6.4 • 400 V, 50 Hz • 3 ~ • S.F. 1.0 • Прямое включение</h4>
							</Link>
							<Link to="/products/gen4" className="card">
								<img src={Gen1} alt="product" />
								<h4>po-mo6.4 • 380 V, 60 Hz • 3 ~ • S.F. 1.0 • Прямое включение</h4>
							</Link>
							<Link to="/products/gen5" className="card">
								<img src={Gen1} alt="product" />
								<h4>po-mo6.4 • 50 Hz • 3 ~ • S.F. 1.0 • Прямое включение</h4>
							</Link>
							<Link to="/products/gen6" className="card">
								<img src={Gen1} alt="product" />
								<h4>po-mo 6.4 • 60 Hz • 3 ~ • S.F. 1.0 • Прямое включение</h4>
							</Link>
						</TabPanel>
						<TabPanel>
							<Link to="/products/pump1" className="card">
								<img src={Pump1} alt="product" />
								<h4>po-ss/6.2</h4>
							</Link>
							<Link to="/products/pump2" className="card">
								<img src={Pump1} alt="product" />
								<h4>po-ss/6.2</h4>
							</Link>
							<Link to="/products/pump2" className="card">
								<img src={Pump1} alt="product" />
								<h4>po-ss/6.2</h4>
							</Link>
						</TabPanel>
					</Tabs>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default ProductsPage;
