import React, { Component } from 'react';
import { connect } from 'react-redux'
import { navigate } from "@reach/router"

import changeTextAction from '../../../store/changeTextAction'
import getDataAction from '../../../store/getDataAction'

import {Container} from './style'

class Input extends Component {

  constructor(props){
    super(props)
    this.keyPress = this.keyPress.bind(this)
    this.changeText = this.changeText.bind(this)
  }

  changeText(e){
    this.props.dispatch( changeTextAction.changeText(e.target.value) )
  }

  keyPress(e){
    if(e.keyCode === 13){
      this.props.dispatch( getDataAction.getData(this.props.text) )
      navigate('/results')
    }
  }

  render(){
    return (
      <Container>
        <textarea 
          type="text" 
          className="input" 
          style={{ marginBottom: this.props.margin ? 32 + 'px' : 0 }}
          placeholder="Procuro um computador para..."
          value={this.props.text}
          onChange = { (e)=> this.changeText(e) }   
          onKeyDown={ this.keyPress }
        />
      </Container>
    );
  }
}

export default connect(store => ({ text: store.text }))(Input)
