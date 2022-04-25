import React from "react";
import "./main.scss";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConnectPage from "./pages/ConnectPage";
import VacancyPage from "./pages/VacancyPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import IndexPage from "./pages/IndexPage"
import ServicePage from "./pages/ServicePage";
import Gen1 from "./pages/products/Gen1";
import Gen2 from "./pages/products/Gen2";
import Gen3 from "./pages/products/Gen3";
import Gen4 from "./pages/products/Gen4";
import Gen5 from "./pages/products/Gen5";
import Gen6 from "./pages/products/Gen6";
import Pump1 from "./pages/products/Pump1";
import Pump2 from "./pages/products/Pump2";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<IndexPage />}></Route>
					<Route exact path="/about" element={<AboutPage />} />
					<Route exact path="/connect" element={<ConnectPage />} />
					<Route exact path="/contact" element={<ContactPage />} />
					<Route exact path="/products" element={<ProductsPage />} />
					<Route exact path="/service" element={<ServicePage />} />
					<Route exact path="/vacancy" element={<VacancyPage />} />
					<Route exact path="/products/gen1" element={<Gen1 />} />
					<Route exact path="/products/gen2" element={<Gen2 />} />
					<Route exact path="/products/gen3" element={<Gen3 />} />
					<Route exact path="/products/gen4" element={<Gen4 />} />
					<Route exact path="/products/gen5" element={<Gen5 />} />
					<Route exact path="/products/gen6" element={<Gen6 />} />
					<Route exact path="/products/pump1" element={<Pump1 />} />
					<Route exact path="/products/pump2" element={<Pump2 />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
