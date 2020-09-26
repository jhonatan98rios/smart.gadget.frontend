import React from 'react';
import { Link } from "@reach/router"

import {Container} from './style'
import { Button } from '../../style/style'

function FastSearch(){
  return (
    <Container>
      <h2 className="title"> Sobre </h2>
      <p className="disclaimer">
        Smart Gadget é um aplicativo que auxilia os usuários a encontrar um notebook ideal para seu uso, baseando-se nas informações fornecidas pelo usuário e fazendo uso de inteligência artificial para classificar da melhor forma os requisitos.
      </p>

      <Link className="no-decoration" to="/">
        <Button>
          <p className="link"> Home </p>
        </Button>
      </Link>
      
    </Container>
  );
}

export default FastSearch
