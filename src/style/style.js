import styled from 'styled-components';

export const Button = styled.div`
  max-width: 300px;
  width: 80%;
  height: 70px;
  margin: 16px auto;
  border: none;
  font-size: 20px;
  background-color: #aaa;
  background-image: ${({disabled}) => disabled ? 'none' : `linear-gradient(to right, #05b, #28d)`};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ( max-height: 650px ) {
    margin: 12px auto;
    height: 60px;
  }

  .link{
    color: #fff;
    text-decoration: none;
  }
`;

export const Question = styled.legend`
  width: 298px;
  padding: 0 16px;
  height: 70px;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(to top, #05b, #28d);
  border-radius: 10px;
  font-family: 'Darker Grotesque';
  font-size: clamp(20px, 4.8vw, 24px);
  line-height: 24px;
  margin: 0px auto 32px;

  @media ( max-height: 650px ) {
    font-size: 18px;
    margin: 0px auto 8px;
    height: 60px;
  }
`