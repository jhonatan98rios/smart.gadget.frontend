import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .no-decoration{
    text-decoration: none;
  }

  @media ( max-height: 650px ) {
    margin-top: 16px;
  }
`;