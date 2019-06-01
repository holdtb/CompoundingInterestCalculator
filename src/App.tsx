import React from 'react';
import './App.css';
import InterestCalculator from './InterestCalculator';
import { Container } from 'semantic-ui-react';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <InterestCalculator />
      </Container>
    </div>
  );
};

export default App;
