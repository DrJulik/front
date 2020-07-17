import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<Link to="/">All Clients</Link>
					<Link to="/search">Search by name</Link>
					<Link to="/about">About</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
