import React, { useState } from 'react';
import SectionButton from '../../components/Home/SectionButton'
import Info from '../../components/Home/Info'
import {Container} from './style'
import {Button} from '../../style/style'
import { Link, navigate  } from "@reach/router"

function Home() {

  const [fastSearch] = useState({
    title: 'Fast Search',
    subtitle: 'Fast Search é um modo de pesquisa baseado na resposta de algumas perguntas. ',
    link: '/fastSearch/0'
  })

  const [smartSearch] = useState({
    title: 'Smart Search',
    subtitle: 'Smart Search usa inteligencia artificial para encontrar o computador ideal para você.',
    link: '/smartSearch'
  })

  const [info, setInfo] = useState('Selecione uma das opções acima')

  function changeInfo( data ){
    console.log(data)
    if ( info === fastSearch.subtitle && data.title === "Fast Search" ){
      navigate(`/fastSearch/0`)
    }else if( info === smartSearch.subtitle && data.title === "Smart Search" ){
      navigate('/smartSearch')
    }else{
      setInfo( data.subtitle )
    }
  }

  return (
    <Container>
      <SectionButton content={fastSearch} changeInfo={changeInfo} selected={ info === fastSearch.subtitle } />
      <SectionButton content={smartSearch} changeInfo={changeInfo} selected={ info === smartSearch.subtitle } />
      <Info content={info} />
      {
        (info === fastSearch.subtitle || info === smartSearch.subtitle) && 
        <Link className="no-decoration" to={ info === fastSearch.subtitle ? fastSearch.link : smartSearch.link }>
          <Button>
            <p className="link">
              Avançar
            </p>
          </Button>
        </Link>
      }
    </Container>
  );
}

export default Home;
