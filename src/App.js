import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const AppBlock = styled.div`
  text-align: center;
`;

const App = () => (
  <AppBlock>
    <Header />
    <p>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </AppBlock>
);

export default App;
