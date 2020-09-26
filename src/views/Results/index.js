import React from 'react';
import Carousel from '../../components/Results/Carousel'
import { Link } from "@reach/router"

import { Container } from './style'
import { Button } from '../../style/style'

function Results(props){
  return (
    <Container>
      <Carousel content={props.content} />
      <Button>
        <Link className="link" to="/"> Início </Link>
      </Button>
    </Container>
  );
}

export default Results;
