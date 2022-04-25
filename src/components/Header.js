import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Header() {
	const handleClick = () => {
		document.querySelector('.navigation').classList.toggle('active');
		document.querySelector(".hamburger--squeeze").classList.toggle("is-active");
	}

	return (
		<nav className="navigation">
			<Link to="/" className="logo">
				<img src={Logo} alt="logo" />
			</Link>
			<ul className="nav-links">
				<Link to="/about" className="nav-link">
					<p> О КОМПАНИИ </p>
				</Link>
				<Link to="/service" className="nav-link">
					<p> УСЛУГИ </p>{" "}
				</Link>
				<Link to="/products" className="nav-link">
					<p> КАТАЛОГ ПРОДУКЦИИ </p>{" "}
				</Link>
				<Link to="/contact" className="nav-link end">
					<p> КОНТАКТЫ </p>{" "}
				</Link>
			</ul>
			<div className="lang">
				<p>EN</p>
			</div>
			<div className="mobile-btns" onClick={handleClick}>
				<button className="hamburger hamburger--squeeze" type="button">
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
			</div>
		</nav>
	);
}

export default Header;
