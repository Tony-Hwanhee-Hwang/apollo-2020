import React from "react";
import styled from "styled-components";
import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_MOVIE = gql`
	query getMovie($id: Int!) {
		movie(id: $id) {
			title
			rating
			description_intro
			medium_cover_image
		}
		suggestions(id: $id) {
			id
			medium_cover_image
			title
		}
	}
`;

const Container = styled.div`
	height: 100vh;
	background: linear-gradient(150deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
	display: flex;
	justify-contents: space-around;
	align-items: center;
`;

const Contents = styled.div`
	margin-left: 50px;
	width: 60%;
	color: white;
`;

const Title = styled.h1`
	font-size: 55px;
	margin-bottom: 10px;
`;

const Rating = styled.p`
	font-size: 32px;
	margin-bottom: 10px;
`;

const Description = styled.p`
	width: 80%;
`;

const Poster = styled.img`
	width: 20%;
`;

const Suggestions = styled.div`
	display: flex;
	padding: 0 10vw;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export default () => {
	const { id } = useParams();
	const { loading, data } = useQuery(GET_MOVIE, {
		variables: { id: parseInt(id) },
	});
	console.log(data);
	return (
		<>
			<Container>
				<Contents>
					<Title>{loading ? "Loading..." : data.movie.title}</Title>
					<Rating>{data?.movie?.rating ? `${data.movie.rating}/10.0` : ""}</Rating>
					<Description>{data?.movie?.description_intro}</Description>
				</Contents>
				<Poster src={data?.movie?.medium_cover_image}></Poster>
			</Container>
			<h1>Suggestions</h1>
			<Suggestions>
				{data?.suggestions?.map((m) => (
					<Movie key={m.id} {...m}></Movie>
				))}
			</Suggestions>
		</>
	);
};
