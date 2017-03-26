import React, { Component } from 'react';
import Header from './components/Header';
import styled from 'styled-components';

const AppBlock = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppBlock>
        <Header />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </AppBlock>
    );
  }
}

export default App;
