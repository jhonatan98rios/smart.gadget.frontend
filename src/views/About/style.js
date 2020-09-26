import styled from 'styled-components';

export const Container = styled.div`
width: 85%;
margin: 64px auto;
text-align: center;
padding-top: 10px;

  @media ( max-height: 650px ) {
    margin: 32px auto;
  }

  .title{
    color: #fff;
    font-size: 36px;
    font-weight: 400;
    font-family: 'Darker Grotesque';
    font-size: 30px;
  }

  .disclaimer{
    font-size: 24px;
    color: #fff;
    width: 80%;
    max-width: 500px;
    margin: 32px auto;
    font-weight: lighter;
    font-family: 'Darker Grotesque';
    font-size: clamp(18px, 4.8vw, 20px);

    @media ( max-height: 650px ) {
      margin: 16px auto;
    }
  }

  .no-decoration{
    text-decoration: none;
  }
  
`;

