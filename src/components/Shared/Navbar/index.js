import React, {useState} from 'react';
import {Container} from './style'
import { Link } from "@reach/router"
import Burguer from '../../../assets/burguer.svg'
import Close from '../../../assets/close.svg'

function Navbar() {

  const [display, setDisplay] = useState(false);

  return (
    <Container>
      <div 
        className={ display ? 'opened sidebar' : 'closed sidebar' }
      >
        <Link 
          onClick={ ()=> setDisplay(!display) }
          className="sidebar-item" 
          to="/"
        > Home </Link>
        <Link 
          onClick={ ()=> setDisplay(!display) }
          className="sidebar-item" 
          to="/about"
        > Sobre </Link>
        {/* <Link 
          onClick={ ()=> setDisplay(!display) }
          className="sidebar-item" 
          to="/analytics"
        > Estatísticas </Link> */}
      </div>
      <div 
        className="navbar"
        onClick={ ()=> setDisplay(!display) }
      >
        <img className="burguer" src={ !display ? Burguer : Close } alt="menu" />
      </div>
    </Container>
  );
}

export default Navbar;
