import styled from 'styled-components';

export const Container = styled.div`

  .input{
    max-width: 85%;
    width: calc(330px - 32px);
    height: calc(120px - 32px);
    margin: 32px auto 0px;
    padding: 16px;
    border: 1px solid #fff;
    background-color: rgba(0,0,0,.8);
    border-radius: 10px;
    position: relative;
    font-size: 20px;
    color: #fff;
    font-weight: lighter;
    resize: none;
    font-family: 'Darker Grotesque';
	
    &::placeholder{
      font-size: 20px;
      color: rgba(255,255,255,.3);
      font-weight: lighter;
    }
  }
  
`;