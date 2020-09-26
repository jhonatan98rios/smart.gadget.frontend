import styled from 'styled-components';

export const Container = styled.div`

  .title, .description{
    text-align: center;
    color: #fff;
  }

  .title{
    margin-top: 64px;
  }

  .chart-box{
    display : flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    margin-top: 64px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .recharts-legend-item-text{
      color: #999;
    }
  }


`