import React from 'react';
import { connect } from 'react-redux'

import { Container } from './style.js';
import { Router } from "@reach/router"

/* Default components */
import Header from './components/Shared/Header'
import Navbar from './components/Shared/Navbar'

/* Views */
import Home from './views/Home'
import FastSearch from './views/FastSearch'
import SmartSearch from './views/SmartSearch'
import Results from './views/Results'
import About from './views/About'
import Analytics from './views/Analytics/index'

class App extends React.Component{

  render(){
    return (
      <Container>
        <Header />
        <Router>
          <Home path="/" />
          <FastSearch path="/fastSearch/:id" />
          <SmartSearch path="/smartSearch" />
          <Results path="/results" />
          <About path="/about" />
          <Analytics path="/analytics" />
        </Router>
        <Navbar />
      </Container>
    );
  }
}

export default connect(store => ({ text: store.text }))(App)
