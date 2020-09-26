import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 32px auto 0px;

  @media ( max-height: 650px ) {
    margin: 16px auto 0px;
  }

  .fieldset{
    display: flex;
    flex-direction: column;
    border: none;
    margin: 0 auto;
    padding: 0;
    width: 100%;
  }

  .buttons{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 4px;

    @media ( max-height: 650px ) {
      margin-top: 0px;
    }

    .disabled{
      background-color: #ccc;
    }

    .link{
      color: #fff;
      text-decoration: none;
      font-family: 'Darker Grotesque';
      font-size: clamp(20px, 4.8vw, 24px);
    }
  }

`;

export const Option = styled.div`
  width: 300px;
  max-width: 80%;
  height: 60px;
  margin: 0px auto 8px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: ${ props => props.checked ? '#28d' : '' };
  transform: ${props => props.checked ? 'scale(1.05)': ''};

  @media ( max-height: 650px ) {
    height: 50px;

    &:last-child {
      margin: 0px auto;
    }
  }

  .label{
    color: #fff;
    font-size: clamp(18px, 4.8vw, 20px);
    line-height: 28px;
    width: 100%;
    height: 100%;
    font-family: 'Darker Grotesque';
    display: flex;
    justify-content: center;
    align-items: center;

    .radio{
      display: none;
    }
  }
`