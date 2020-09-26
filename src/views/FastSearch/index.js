import React, { Component } from 'react';
import { Link } from "@reach/router"
import { connect } from 'react-redux'
import setFirstAction from '../../store/setFirstAction'
import setSecondAction from '../../store/setSecondAction'
import setThirdAction from '../../store/setThirdAction'
import fastSearchAction from '../../store/fastSearchAction'

import {Container, Option} from './style'
import { Button, Question } from '../../style/style'

import questions from './questions'

class Ask extends Component{

  constructor(props){
    super(props)
    this.state = {
      checked: null
    }
    this.sendData = this.sendData.bind(this)
    this.next = this.next.bind(this)
  }

  setOption(e){
    let page = parseInt(this.props.id)

    this.setState({
      checked: e.target.id
    })
    
    console.log(page)

    switch(page){
      case 0:
        this.props.dispatch(setFirstAction.setFirst(e.target.id))
        break
      case 1:
        this.props.dispatch(setSecondAction.setSecond(e.target.id))
        break
      case 2:
        this.props.dispatch(setThirdAction.setThird(e.target.id))
        break
      default:
        console.error('Error')
    }
  }

  sendData(){
    let text = `${this.props.first}, ${this.props.second}, ${this.props.third}`
    this.props.dispatch( fastSearchAction.fastSearch(text) )
  }

  next(){ if(this.state.checked != null){ 
      if(this.props.id < 2){
        this.setState({checked: null})
      }else{
        this.sendData() 
      }
    }
  }

  render(){
    return (
      <Container>
        <fieldset className="fieldset">
          <Question> {questions[this.props.id].question} </Question>
          {
            questions[this.props.id].options.map((option, index)=>{
              return (
                // eslint-disable-next-line eqeqeq
                <Option checked={ this.state.checked == index }
                  className="option" 
                  key={index}
                >
                  <label className="label" onClick={ (e)=>{ this.setOption(e) } }>
                    <input 
                      type="radio" 
                      id={index} 
                      name="options" 
                      className="radio"
                    />
                    { option.label } 
                  </label>
                </Option>
              )
            })
          }
        </fieldset>
        <div className="buttons">
          {/* Next */}
          <Button disabled={ this.state.checked == null }>
            <Link 
              className="link"
              onClick={ this.next } 
              to={ 
                (this.state.checked != null) ? (this.props.id < 2) ? `/fastSearch/${ parseInt(this.props.id)+1}` : '/results' : '' }
            > Próximo 
            </Link>
          </Button>
          {/* Previous */}
          <Link 
            className="link" 
            onClick={ ()=>{ this.setState({checked: null}) } } 
            to={ this.props.id > 0 ? `/fastSearch/${parseInt(this.props.id)-1}` : '/' }> Voltar 
          </Link>
        </div>
      </Container>
    );  
  }

}

export default connect(store => ({ first: store.first, second: store.second, third: store.third }))(Ask)
