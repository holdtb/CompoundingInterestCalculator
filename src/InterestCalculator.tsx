import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Container } from 'semantic-ui-react';
import InterestStore from './lib/InterestStore';
import InputForm from './InputForm';
import Summary from './Summary';

interface State {
  store: InterestStore;
}

@observer
export default class InterestCalculator extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      store: new InterestStore()
    };
  }

  render() {
    return (
      <Container>
        <h1>Interest Calculator</h1>
        <InputForm store={this.state.store} />
        <Summary store={this.state.store} />
      </Container>
    );
  }
}
