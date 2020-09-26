import React from 'react';
import { Button } from '../../../style/style'

function SectionButton(props) {
  return (
    <Button onClick={ ()=>{ props.changeInfo(props.content) } } selected={props.selected} > 
      <p className="link"> {props.content.title} </p>
    </Button>
  );
}

export default SectionButton;
