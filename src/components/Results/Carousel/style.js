import styled from 'styled-components';

export const Container = styled.div`

  .carousel{
    width: 100%;
    height: 430px;
    margin: 0 auto;

    @media ( max-height: 650px ) {
      height: 400px;
    }

    .card{
      min-height: 330px;
      width: calc(80% - 50px);
      min-width: 200px;
      background-color: #fff;
      margin: 50px 20px 0px;
      border-radius: 10px;
      text-align: left;
      padding: 5px 25px 10px 25px;
      box-shadow: 0px 3px 5px rgba(0,0,0,.7);

      @media ( max-height: 650px ) {
        height: 300px;
        width: 80%;
      }

      .image-box{
        text-align: center;

        .image{
          margin: 20px auto;
          width: 150px;
          margin-top: -50px;
          transition: all .5s;
          filter: drop-shadow(2px 2px 2px rgba(0,0,0,.5));

          @media(max-width: 768px){
            max-height: 120px;
          }

          @media ( max-height: 650px ) {
            margin-top: -60px;
            width: 120px;
          }
        }
      }

      .description{
        padding-bottom: 10px;

        strong{
          font-size: 20px;
          margin: 0 auto;
          line-height:18px;

          @media ( max-height: 650px ) {
            font-size: 18px;
          }
        }

        p{
          margin: 5px auto;
          line-height:18px;

          @media ( max-height: 650px ) {
            line-height:16px;
            font-size: 16px;
          }
        }
      }
    }

    .is-selected{
      transform: scale(1.05);
      transition: all .5s;

      .image{
        transform: scale(1.1);
        transition: all .5s;
      }
    }
  }
  
`;