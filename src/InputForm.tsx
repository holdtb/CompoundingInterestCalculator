import React, { Component } from 'react';
import InterestStore from './lib/InterestStore';
import { Form, Input } from 'semantic-ui-react';
import { CompoundingType, Time } from './lib/Types';
import { observer } from 'mobx-react';

interface Props {
  store: InterestStore;
}

@observer
class InputForm extends Component<Props, {}> {
  render() {
    const props = this.props;
    return (
      <Form widths="equal">
        <Form.Group>
          <Form.Select
            label="Type"
            fluid
            options={props.store.typeOptions}
            value={CompoundingType[CompoundingType[props.store.type]]}
            onChange={(_, data) => {
              console.log(props);
              props.store.type = CompoundingType[CompoundingType[data.value as number]];
            }}
          />
          <Form.Select
            label="Time"
            fluid
            value={Time[Time[props.store.time]]}
            onChange={(_, data) => {
              props.store.time = Time[Time[data.value as number]];
            }}
            options={props.store.timeOptions}
          />

          <Form.Field
            onChange={(_, { value }) => {
              if (value === '') props.store.principal = 0;
              else props.store.principal = parseFloat(value) || 0;
            }}
            control={Input}
            label="Principal"
            placeholder="Principal"
          />
          <Form.Field
            onChange={(_, { value }) => {
              if (value === '') props.store.rate = 0;
              else props.store.rate = (parseFloat(value) || 0) / 100;
            }}
            control={Input}
            label="Interest Rate"
            placeholder="Interest Rate"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default InputForm;
