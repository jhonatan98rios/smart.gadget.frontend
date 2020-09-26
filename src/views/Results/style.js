import styled from 'styled-components';

export const Container = styled.div`

	width: 85%;
	margin: 32px auto;
	text-align: center;

	@media ( max-height: 650px ) {
		margin: 16px auto;
	}

	.title{
		color: #fff;
		font-size: 30px;
		font-weight: 400;
		text-shadow: 0px 0px 5px rgba(0,0,0,.7);
		font-family: 'Darker Grotesque';
	}
`;
