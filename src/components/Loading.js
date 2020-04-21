import React from "react";
import styled, { keyframes } from "styled-components";

const ani1 = keyframes`
    0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    `;

const ani2 = keyframes`
    0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    `;

const ani3 = keyframes`
    0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    `;

const Loading = styled.div`
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
`;

const El = styled.div`
	position: absolute;
	top: 33px;
	width: 13px;
	height: 13px;
	border-radius: 50%;
	background: #2196f3;
	animation-timing-function: cubic-bezier(0, 1, 1, 0);
`;

const FirstEl = styled(El)`
	left: 8px;
	animation: ${ani1} 0.6s infinite;
`;

const SecondEl = styled(El)`
	left: 8px;
	animation: ${ani2} 0.6s infinite;
`;

const ThirdEl = styled(El)`
	left: 32px;
	animation: ${ani2} 0.6s infinite;
`;

const ForthEl = styled(El)`
	left: 56px;
	animation: ${ani3} 0.6s infinite;
`;

const Background = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export default () => {
	return (
		<Background>
			<Loading>
				<FirstEl></FirstEl>
				<SecondEl></SecondEl>
				<ThirdEl></ThirdEl>
				<ForthEl></ForthEl>
			</Loading>
		</Background>
	);
};
