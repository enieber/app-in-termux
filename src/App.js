import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Panel from "./Panel";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

function App() {
	const client = new ApolloClient({
		uri: "https://hagrid-startse.herokuapp.com/v1/graphql"
	});

	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Header />
				<Panel />
			</div>
		</ApolloProvider>
	);
}

export default App;
