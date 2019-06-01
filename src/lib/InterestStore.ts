import { observable, computed } from 'mobx';
import { CompoundingType, Time } from './Types';
import {
  MIN_PRINCIPAL,
  MAX_PRINCIPAL,
  MAX_RATE,
  MIN_RATE,
  DEFAULT_RATE,
  DEFAULT_PRINCIPAL
} from './Constants';

export default class InterestStore {
  @observable type: CompoundingType;
  @observable time: Time;
  @observable private _principal: number;
  @observable private _rate: number;

  constructor() {
    this.type = CompoundingType.Constant;
    this.time = Time.Day;
    this._rate = DEFAULT_RATE;
    this._principal = DEFAULT_PRINCIPAL;
  }

  @computed get rate() {
    return this._rate;
  }
  set rate(value) {
    if (value >= MIN_RATE && value <= MAX_RATE) this._rate = value;
  }

  @computed get principal() {
    return this._principal;
  }

  set principal(value) {
    if (value >= MIN_PRINCIPAL && value <= MAX_PRINCIPAL) this._principal = value;
  }

  get typeOptions() {
    return [
      { key: 1, text: 'Constant', value: CompoundingType.Constant },
      { key: 2, text: 'Daily', value: CompoundingType.Daily },
      { key: 3, text: 'Monthly', value: CompoundingType.Monthly },
      { key: 4, text: 'Quarterly', value: CompoundingType.Quarterly },
      { key: 5, text: 'Annually', value: CompoundingType.Annually }
    ];
  }

  get timeOptions() {
    return [
      { key: 1, text: 'One Day', value: Time.Day },
      { key: 2, text: 'Thirty Days', value: Time.ThirtyDays },
      { key: 3, text: 'Ninety Days', value: Time.NinetyDays },
      { key: 4, text: 'One Year', value: Time.OneYear },
      { key: 5, text: 'Twenty Months', value: Time.TwentyMonths },
      { key: 6, text: 'Seven Years', value: Time.SevenYears },
      { key: 7, text: 'One Thousand Years', value: Time.ThousandYears }
    ];
  }

  private timeInYears() {
    switch (this.time) {
      case Time.Day:
        return 1 / 365;
      case Time.ThirtyDays:
        return 30 / 365;
      case Time.NinetyDays:
        return 90 / 365;
      case Time.OneYear:
        return 1;
      case Time.TwentyMonths:
        return (20 * 30) / 365;
      case Time.SevenYears:
        return 7;
      case Time.ThousandYears:
        return 1000;
      default:
        throw new Error('Not Implemented.');
    }
  }

  private timesCollectedPerYear() {
    switch (this.type) {
      case CompoundingType.Daily:
        return 365;
      case CompoundingType.Monthly:
        return 12;
      case CompoundingType.Quarterly:
        return 4;
      case CompoundingType.Annually:
        return 1;
      default:
        throw new Error('Not Implemented.');
    }
  }

  private calcStandardInterest = (
    principal: number,
    rate: number,
    timeInYears: number,
    collectionsPerYear: number
  ): number => {
    const result =
      principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
    return result;
  };

  private calcConstantInterest = (principal: number, rate: number, timeInYears: number): number => {
    const result = (principal * Math.E) ^ (rate * timeInYears);
    return result;
  };

  @computed get total() {
    const principal = this.principal;
    const rate = this.rate;
    const timeInYears = this.timeInYears();
    if (this.type !== CompoundingType.Constant)
      return this.calcStandardInterest(principal, rate, timeInYears, this.timesCollectedPerYear());
    else return this.calcConstantInterest(principal, rate, timeInYears);
  }
}
