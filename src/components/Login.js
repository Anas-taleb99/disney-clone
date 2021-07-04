import React from 'react';
import styled from 'styled-components';

const Login = () => {

	return (
		<Container>
			<CTA>
				<CTALogoOne src='/images/cta-logo-one.svg'></CTALogoOne>
				<SignUp>Get All There</SignUp>
				<Description>
					Get Premium Access to Raya and the Last Dragon for an additional free with a Desney+ subscription. As of 03/26/21, the price of Desney+ and The Desney Bundle will increase by $1.
				</Description>
				<CTALogoTwo src='/images/cta-logo-two.png'></CTALogoTwo>
			</CTA>
		</Container>
	)
}

export default Login;

const Container = styled.div`
	display: grid;
	place-content: center;
	height: calc(100vh - 70px);
	position: relative;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-image: url('/images/login-background.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: top;
		opacity: 0.7;
		z-index: -1;
	}
`;

const CTA = styled.div`
	max-width: 650px;
	padding: 80px 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CTALogoOne = styled.img`
	width: 100%;
	object-fit: contain;

`;

const SignUp = styled.a`
	text-transform: uppercase;
	width: 100%;
	background-color: #0063e5;
	color: #f9f9f9;
	font-weight: bold;
	padding: 17px 0;
	border-radius: 4px;
	text-align: center;
	font-size: 18px;
	cursor: pointer;
	transition: all 250ms ease-in-out;
	letter-spacing: 1.5px;
	margin-top: 8px;
	margin-bottom: 12px;

	&:hover {
		background-color: #0483ee;
	}
`;

const Description = styled.p`
	font-size: 11px; 
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;	
`;

const CTALogoTwo = styled.img`
	width: 100%;
	object-fit: contain;
`