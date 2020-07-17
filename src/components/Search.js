import React, { useState } from "react";
import Client from "./Client";
import axios from "axios";

const Search = () => {
	const [formData, setFormData] = useState({
		FirstName: "",
		LastName: "",
	});
	const [clientData, setClientData] = useState([]);

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onFirstNameSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.get(
			`http://localhost:5000/clients/fname/${FirstName}`
		);
		setClientData(res.data);
		setFormData({ FirstName: "" });
	};

	const onLastNameSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.get(
			`http://localhost:5000/clients/lname/${LastName}`
		);
		setClientData(res.data);
		setFormData({ LastName: "" });
	};

	const { FirstName, LastName } = formData;
	return (
		<main>
			<div className="search">
				<form>
					<div className="input-container">
						<label htmlFor="FirstName">Search by First Name:</label>
						<input
							placeholder="John"
							type="text"
							name="FirstName"
							id="FirstName"
							value={FirstName}
							onChange={onChange}
						/>
						<button type="submit" onClick={onFirstNameSubmit}>
							Submit!
						</button>
					</div>
				</form>
				<form>
					<div className="input-container">
						<label htmlFor="LastName">Search by Last Name:</label>
						<input
							placeholder="Doe"
							type="text"
							name="LastName"
							id="LastName"
							value={LastName}
							onChange={onChange}
						/>
						<button type="submit" onClick={onLastNameSubmit}>
							Submit!
						</button>
					</div>
				</form>
			</div>
			<div>
				{clientData.length > 0 &&
					clientData.map((client) => {
						return <Client key={client._id} client={client} />;
					})}
			</div>
		</main>
	);
};

export default Search;
