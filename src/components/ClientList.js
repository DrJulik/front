import React, { useState, useEffect } from "react";
import Client from "./Client";
import axios from "axios";

const ClientList = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get("http://localhost:5000/clients");

			try {
				setClients(res.data);
			} catch (err) {
				console.log(err.message);
			}
		};

		fetchData();
	}, []);

	return (
		<main>
			<div>
				<h1 className="heading">
					This is the list of clients. It's coming from a MongoDB database
				</h1>
				{clients &&
					clients.map((client) => {
						return <Client key={client._id} client={client} />;
					})}
			</div>
		</main>
	);
};

export default ClientList;
