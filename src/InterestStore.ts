import { observable, computed } from 'mobx';
import { CompoundingType, Time } from './Types';

export default class InterestStore {
  @observable type: CompoundingType;
  @observable time: Time;
  @observable principal: number;
  @observable rate: number;

  constructor() {
    this.type = CompoundingType.Constant;
    this.time = Time.Day;
    this.principal = 0;
    this.rate = 2.5;
  }

  @computed get total() {
    return 0;
  }
}
