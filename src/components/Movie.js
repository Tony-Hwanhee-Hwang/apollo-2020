import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
	padding: 5px;
	width: 200px;
`;
const Card = styled.div`
	background-color: white;
	border-radius: 10px;
	img {
		width: 100%;
		border-radius: 10px 10px 0 0;
	}
	:hover {
		box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
	}
`;
const Contents = styled.div`
	padding-top: 5px;
	padding-bottom: 10px;
	vertical-align: middle;
	text-align: center;
`;

export default ({ id, medium_cover_image, title }) => {
	return (
		<Link to={`/${id}`}>
			<CardContainer>
				<Card>
					<img src={medium_cover_image} alt={title}></img>
					<Contents>{title}</Contents>
				</Card>
			</CardContainer>
		</Link>
	);
};
