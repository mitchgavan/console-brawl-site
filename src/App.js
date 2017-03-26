import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';

const AppBlock = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 1920px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroGame1: '',
      heroGame2: '',
    };
  }

  render() {
    return (
      <AppBlock>
        <Header />
        <Wrapper>
          <Hero />
          <p>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Wrapper>
      </AppBlock>
    );
  }
}

export default App;
