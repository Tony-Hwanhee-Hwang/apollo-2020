import ApolloClient from "apollo-boost";

const graphQL_URL = "http://localhost:4000/";

const client = new ApolloClient({
	uri: graphQL_URL,
});

export default client;
