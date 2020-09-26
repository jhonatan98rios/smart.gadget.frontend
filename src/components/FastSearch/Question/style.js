import styled from 'styled-components';

export const Container = styled.li`

  list-style: none;
  text-align: center;
  width: calc(100%-6px);
  min-height: 75px;
  background-image: linear-gradient(to right, #05b, #28d);
  box-shadow: 2px 2px 5px rgba(0,0,0,.5);
  padding: 0px;
  border-radius: 15px;
  margin: 15px auto;
  color: #fff;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  .link{
    color: #fff;
    text-decoration: #fff;
    font-size: clamp(18px, 5.2vw, 22px);

    .text{
      padding: 10px;
      margin: 0 auto;
    }
  }


  
`
