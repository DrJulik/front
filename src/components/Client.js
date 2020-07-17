import React from "react";

const Client = ({ client }) => {
	return (
		<div className="client-list-item">
			<h2>
				{client.FirstName} {client.LastName}
			</h2>
		</div>
	);
};

export default Client;
