import React from 'react';
import Flickity from 'react-flickity-component'
import { connect } from 'react-redux'

import {Container} from './style'

const flickityOptions = {
  initialIndex: 0,
  draggable: true,
  freeScroll: false,
  prevNextButtons: false,
  pageDots: false,
  accessibility: true,
  cellAlign: 'center'
}

function Carousel(props) {

  return (
    <Container>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >

        { props.data.map((notebook, index)=>{
          return(
            <div className="card" key={index}>
              <div className="image-box">
                <img className="image" src={notebook.image} alt="notebook" />
              </div>
              <div className="description">
                <strong> {notebook.name} </strong>
                <p> CPU: {notebook.cpu} </p>
                <p> Armazenamento: {notebook.storage} </p>
                <p> Ram: {notebook.ram} </p>
                <p> GPU: {notebook.gpu} </p>
                <p> Sistema: {notebook.so} </p>
                <p> Tela: {notebook.screen} </p>
                <p> Peso: {notebook.weight} </p>
                <p> Valor aproximado: R$ {notebook.price} </p>
              </div>
            </div>
          )
        }) }
        
      </Flickity>
    </Container>
  );
}

export default connect( store => ({ data: store.data }) )(Carousel);
