import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import React from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import Loading from "../components/Loading";

const MOVIE_QUERY = gql`
	{
		movies {
			id
			medium_cover_image
			title
		}
	}
`;

const Div = styled.div`
	font-size: 48px;
	text-align: center;
	padding: 130px 0;
	background: linear-gradient(150deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
	color: white;
`;

const Contents = styled.div`
	position: relative;
	top: -40px;
	padding: 0 10vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-align: center;
	flex-wrap: wrap;
`;
export default () => {
	const { loading, data } = useQuery(MOVIE_QUERY);

	if (loading) {
		return <Loading />;
	} else
		return (
			<>
				<Div>Apollo-2020</Div>
				<Contents>
					{data?.movies?.map((m) => (
						<Movie key={m.id} {...m}></Movie>
					))}
				</Contents>
			</>
		);
};
