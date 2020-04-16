import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import React from "react";

const MOVIE_QUERY = gql`
	{
		movies {
			id
			medium_cover_image
			title
		}
	}
`;

export default () => {
	const { loading, error, data } = useQuery(MOVIE_QUERY);
	console.log(loading, error, data);
	if (loading) {
		return "Loading...";
	}
	if (data && data.movies) {
		return data.movies.map((m) => <img key={m.id} src={m.medium_cover_image} alt={m.title} />);
	}
	return "HOME";
};
