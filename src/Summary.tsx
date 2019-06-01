import React, { Component } from 'react';
import InterestStore from './lib/InterestStore';
import { Table } from 'semantic-ui-react';
import { observer } from 'mobx-react';

interface Props {
  store: InterestStore;
}

@observer
class Summary extends Component<Props, {}> {
  render() {
    const props = this.props;
    return (
      <Table celled striped textAlign="center" size="small">
        <Table.Body>
          <Table.Row>
            <Table.HeaderCell width={4}>Principal</Table.HeaderCell>
            <Table.Cell>
              $
              {props.store.principal.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Interest</Table.HeaderCell>
            <Table.Cell>
              $
              {(props.store.total - props.store.principal).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.Cell>
              $
              {props.store.total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default Summary;
