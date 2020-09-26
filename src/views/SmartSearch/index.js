import React, { Component } from 'react';
import { connect } from 'react-redux'

import Input from '../../components/SmartSearch/Input'
import { Link } from "@reach/router"

import getDataAction from '../../store/getDataAction'

import { Container } from './style'
import { Button } from '../../style/style'

class SmartSearch extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.dispatch( getDataAction.getData(this.props.text) )
    /* this.props.sendData('Ok') */
  }

  render(){
    return (
      <Container>
        <h2 className="title"> Smart Search </h2>
        <label className="label">
          Me fale um pouco sobre o computador que você procura.
          <Input margin={ (this.props.text.length < 3) } />
        </label>
        { 
          this.props.text.length >= 3 && 
          <Button onClick={ this.handleClick }>
            <Link className="link" to="/results"> Confirmar </Link> 
          </Button> 
        }
        {/* Previous */}
        <Link 
          className="link" to='/'> Voltar 
        </Link>
      </Container>
    );
  }
}

export default connect(store => ({ text: store.text }))(SmartSearch)


