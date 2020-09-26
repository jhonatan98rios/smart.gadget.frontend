import styled from 'styled-components';

export const Button = styled.div`
  width: 300px;
  height: 70px;
  border: none;
  margin: 10px auto;
  text-align: center;
  max-width: 80%;
  font-family: 'Darker Grotesque';
  font-size: clamp(20px, 4.8vw, 24px);
  background-image: ${({disabled}) => disabled ? 'none' : `linear-gradient(to right, #05b, #28d)`};
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.5);
  display: flex;
  align-items: center;
  cursor: pointer;
  transform: ${({selected}) => selected ? 'scale(1.03)' : 'scale(1)' };
  filter: ${({selected}) => selected ? 'brightness(1.3)' : 'brightness(1)' };
  
  
  .link{
    color: #fff;
    text-decoration: none;
    margin: 0 auto;
    padding: 0;
    cursor: pointer;
  }

`
