import styled from 'styled-components';

export const Container = styled.div`

  width: 85%;
  margin: 80px auto;
  text-align: center;
  padding-top: 20px;

  @media ( max-height: 650px ) {
    margin: 16px auto;
  }

  .title{
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    text-shadow: 0px 0px 5px rgba(0,0,0,.7);
    font-family: 'Darker Grotesque';
    margin: 0 auto 48px;

    @media ( max-height: 650px ) {
      margin: 0 auto 16px;
    }
  }

  .label{
    color: #fff;
    font-size: clamp(18px, 5.2vw, 22px);
    font-weight: lighter;
    max-width: 90%;
    line-height: 25px;
    font-family: 'Darker Grotesque';
  }

  .link{
    color: #fff;
    text-decoration: none;
    width: 124px;
    font-size: 20px;
  }
`;

export const Button = styled.div`
  border: none;
  font-size: clamp(18px, 5.2vw, 22px);
  background-color: #aaa;
  background-image: ${({disabled}) => disabled ? 'none' : `linear-gradient(to right, #05b, #28d)`};
  padding: 10px 20px;
  border-radius: 15px;
  margin-top: 20px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.5);
  width: 80px;
  margin: 0 auto;

  .link{
    color: #fff;
    text-decoration: none;
  }

`;
