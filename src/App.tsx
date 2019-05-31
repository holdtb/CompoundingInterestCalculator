import React from 'react';
import './App.css';
import InterestCalculatorView from './InterestCalculatorView';
import { Container } from 'semantic-ui-react';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <InterestCalculatorView />
      </Container>
    </div>
  );
};

export default App;
