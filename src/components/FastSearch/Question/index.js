import React from 'react';
import {Container} from './style'
import { Link } from "@reach/router"

function Question(props) {
  return (
    <Container to={`/ask/${props.content.id}`}>
      <Link className="link">
        <p className="text">
          { props.content.question }
        </p>
      </Link>
    </Container>
  );
}

export default Question;
