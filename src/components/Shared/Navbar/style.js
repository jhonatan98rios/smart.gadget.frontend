import styled from 'styled-components';

/* let innerWidth = window.innerWidth; */

export const Container = styled.div`
  top: 0px;
  left: 0px;
  position: absolute;

  .opened{
    transform: translateX(0px);
    transition: all .75s;
  }

  .closed{
    transform: translateX(-300px);
    transition: all .75s;
    transition-timing-function: linear;
  }

  .sidebar{
    height: 100vh;
    width: 300px;
    max-width: 60%;
    position: fixed;
    background-color: #000;
    top: 0px;
    left: 0px;
    padding-top: 65px;
    display: flex;
    flex-direction: column;

    .sidebar-item{
      font-size: 22px;
      color: #fff;
      text-decoration: none;
      padding-left: 75px;
      font-family: 'Darker Grotesque';
      font-size: clamp(18px, 4.8vw, 20px);
      border-bottom: 3px solid rgba(255,255,255,.1);
      padding: 15px;
      margin: 2px;

      &:first-child{
        border-top: 3px solid rgba(255,255,255,.1);
      }
    }
  }

  .navbar{
    top: 0px;
    left: 0px;
    width: 65px;
    height: 65px;
    border-radius: 40px;
    text-align: center;
    color: #8571F5;
    font-family: 'Darker Grotesque', sans-serif;
    filter: drop-shadow(0px 3px 3px rgba(0,0,0,.5));
    z-index: 1;
    position: fixed;

    .burguer{
      width: 25px;
      height: 25px;
      left: 0px;
      padding-top: 15px;
      filter: invert(1);
    }

    @media(min-width: 768px){
      bottom: none;
      top: 0;
      left: 0;
      border-radius: 0px;
      background-color: transparent;
    }
  }
`;
