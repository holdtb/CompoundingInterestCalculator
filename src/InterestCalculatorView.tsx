import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Form, Container } from 'semantic-ui-react';
import { CompoundingType, Time } from './Types';
import InterestStore from './InterestStore';

const typeOptions = [
  { key: 1, text: 'Constant', value: CompoundingType.Constant },
  { key: 2, text: 'Daily', value: CompoundingType.Daily },
  { key: 3, text: 'Monthly', value: CompoundingType.Monthly },
  { key: 4, text: 'Quarterly', value: CompoundingType.Quarterly },
  { key: 5, text: 'Annually', value: CompoundingType.Annually }
];

const timeOptions = [
  { key: 1, text: 'One Day', value: Time.Day },
  { key: 2, text: 'Thirty Days', value: Time.ThirtyDays },
  { key: 3, text: 'Ninety Days', value: Time.NinetyDays },
  { key: 4, text: 'One Year', value: Time.OneYear },
  { key: 5, text: 'Twenty Months', value: Time.TwentyMonths },
  { key: 6, text: 'Seven Years', value: Time.SevenYears },
  { key: 7, text: 'One Thousand Years', value: Time.ThousandYears }
];

interface State {
  store: InterestStore;
}

@observer
export default class InterestCalculatorView extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      store: new InterestStore()
    };
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newValue = event.currentTarget.value;
    const store = this.state.store;
    store.type = CompoundingType[newValue];
  }

  render() {
    return (
      <Container>
        <h1>Interest Calculator</h1>
        <Form>
          <Form.Group>
            <Form.Select label="Type" width={3} fluid options={typeOptions} />
            <Form.Select label="Time" width={5} fluid options={timeOptions} />
          </Form.Group>
        </Form>
        Total: ${this.state.store.total}
      </Container>
    );
  }
}
