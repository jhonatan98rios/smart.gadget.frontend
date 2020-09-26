import styled from 'styled-components';
import info from '../../../assets/Info.svg'

export const Container = styled.div`
  width: 300px;
  max-width: 80%;
  height: 160px;
  margin: 32px auto 16px;
  border: none;
  border-radius: 10px;
  background-color: rgba(0,0,0,.5);
  text-align: center;
  color: #fff;

  @media ( max-height: 650px ) {
    margin: 16px auto 0px;
  }

  .icon{
    width: 50px;
    height: 50px;
    background-image: url(${info});
    background-size: 100% 100%;
    margin: 0 auto;
    border-radius: 25px;
    margin-top: -16px;
    font-size: 30px;
  }

  .text{
    width: 80%;
    margin: 20px auto;
    font-family: 'Darker Grotesque';
    font-size: clamp(18px, 4.8vw, 20px);
  }
`