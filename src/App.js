import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ClientList from "./components/ClientList";
import About from "./components/About";
import Search from "./components/Search";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path="/" component={ClientList} exact />
					<Route path="/about" component={About} exact />
					<Route path="/search" component={Search} exact />
				</Switch>
			</Router>
		</>
	);
}

export default App;
