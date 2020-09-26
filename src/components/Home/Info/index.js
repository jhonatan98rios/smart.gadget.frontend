import React from 'react';
import { Container } from './style'

function Info(props) {
  return (
    <Container>
      <div className="icon"> </div>
      <p className="text"> {props.content} </p>
    </Container>
  );
}

export default Info;
