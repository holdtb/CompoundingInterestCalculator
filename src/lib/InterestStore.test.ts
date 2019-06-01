import InterestStore from './InterestStore';
import { Time, CompoundingType } from './Types';

let store: InterestStore;
describe('Interest Calculations', () => {
  beforeEach(() => {
    store = new InterestStore();
  });

  describe('Annual interest', () => {
    const collectionsPerYear = 1;
    const principal = 1000;
    const rate = 2.56;

    beforeEach(() => {
      store.principal = principal;
      store.rate = rate;
      store.type = CompoundingType.Annually;
    });

    it('One Day', () => {
      const timeInYears = 1 / 365;
      store.time = Time.Day;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Thirty Days', () => {
      const timeInYears = 30 / 365;
      store.time = Time.ThirtyDays;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Ninety Days', () => {
      const timeInYears = 90 / 365;
      store.time = Time.NinetyDays;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('1 year', () => {
      const timeInYears = 1;
      store.time = Time.OneYear;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Twenty Months', () => {
      const timeInYears = (20 * 30) / 365;
      store.time = Time.TwentyMonths;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Seven years', () => {
      const timeInYears = 7;
      store.time = Time.SevenYears;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Thousand years', () => {
      const timeInYears = 1000;
      store.time = Time.ThousandYears;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });
  });

  describe('Daily Interest', () => {
    const collectionsPerYear = 365;
    const principal = 1000;
    const rate = 2.56;

    beforeEach(() => {
      store.principal = principal;
      store.rate = rate;
      store.type = CompoundingType.Daily;
    });

    it('One Day', () => {
      const timeInYears = 1 / 365;
      store.time = Time.Day;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Thirty Days', () => {
      const timeInYears = 30 / 365;
      store.time = Time.ThirtyDays;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Ninety Days', () => {
      const timeInYears = 90 / 365;
      store.time = Time.NinetyDays;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('1 year', () => {
      const timeInYears = 1;
      store.time = Time.OneYear;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Twenty Months', () => {
      const timeInYears = (20 * 30) / 365;
      store.time = Time.TwentyMonths;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Seven years', () => {
      const timeInYears = 7;
      store.time = Time.SevenYears;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Thousand years', () => {
      const timeInYears = 1000;
      store.time = Time.ThousandYears;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });
  });

  describe('Monthly Interest', () => {
    const collectionsPerYear = 12;
    const principal = 1000;
    const rate = 2.56;

    beforeEach(() => {
      store.principal = principal;
      store.rate = rate;
      store.type = CompoundingType.Monthly;
    });

    it('One Day', () => {
      const timeInYears = 1 / 365;
      store.time = Time.Day;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Thirty Days', () => {
      const timeInYears = 30 / 365;
      store.time = Time.ThirtyDays;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Ninety Days', () => {
      const timeInYears = 90 / 365;
      store.time = Time.NinetyDays;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('1 year', () => {
      const timeInYears = 1;
      store.time = Time.OneYear;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Twenty Months', () => {
      const timeInYears = (20 * 30) / 365;
      store.time = Time.TwentyMonths;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Seven years', () => {
      const timeInYears = 7;
      store.time = Time.SevenYears;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Thousand years', () => {
      const timeInYears = 1000;
      store.time = Time.ThousandYears;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });
  });

  describe('Quarterly Interest', () => {
    const collectionsPerYear = 4;
    const principal = 1000;
    const rate = 2.56;

    beforeEach(() => {
      store.principal = principal;
      store.rate = rate;
      store.type = CompoundingType.Quarterly;
    });

    it('One Day', () => {
      const timeInYears = 1 / 365;
      store.time = Time.Day;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Thirty Days', () => {
      const timeInYears = 30 / 365;
      store.time = Time.ThirtyDays;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Ninety Days', () => {
      const timeInYears = 90 / 365;
      store.time = Time.NinetyDays;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('1 year', () => {
      const timeInYears = 1;
      store.time = Time.OneYear;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Twenty Months', () => {
      const timeInYears = (20 * 30) / 365;
      store.time = Time.TwentyMonths;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Seven years', () => {
      const timeInYears = 7;
      store.time = Time.SevenYears;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Thousand years', () => {
      const timeInYears = 1000;
      store.time = Time.ThousandYears;

      const expectedTotal =
        principal * Math.pow(1 + rate / collectionsPerYear, collectionsPerYear * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });
  });

  describe('Continuous Interest', () => {
    const principal = 1000;
    const rate = 2.56;

    beforeEach(() => {
      store.principal = principal;
      store.rate = rate;
      store.type = CompoundingType.Constant;
    });

    it('One Day', () => {
      const timeInYears = 1 / 365;
      store.time = Time.Day;

      const expectedTotal = (principal * Math.E) ^ (rate * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Thirty Days', () => {
      const timeInYears = 30 / 365;
      store.time = Time.ThirtyDays;

      const expectedTotal = (principal * Math.E) ^ (rate * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Ninety Days', () => {
      const timeInYears = 90 / 365;
      store.time = Time.NinetyDays;

      const expectedTotal = (principal * Math.E) ^ (rate * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('1 year', () => {
      const timeInYears = 1;
      store.time = Time.OneYear;

      const expectedTotal = (principal * Math.E) ^ (rate * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Twenty Months', () => {
      const timeInYears = (20 * 30) / 365;
      store.time = Time.TwentyMonths;

      const expectedTotal = (principal * Math.E) ^ (rate * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Seven years', () => {
      const timeInYears = 7;
      store.time = Time.SevenYears;

      const expectedTotal = (principal * Math.E) ^ (rate * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });

    it('Thousand years', () => {
      const timeInYears = 1000;
      store.time = Time.ThousandYears;

      const expectedTotal = (principal * Math.E) ^ (rate * timeInYears);
      expect(store.total).toBe(expectedTotal);
    });
  });

  describe('Misc Requirements', () => {
    it('Principal cannot fall below -1M', () => {
      const store = new InterestStore();
      store.principal = -1000000;

      store.principal = -1000001;
      expect(store.principal).toBe(-1000000);
    });

    it('Principal cannot rise above 1M', () => {
      const store = new InterestStore();
      store.principal = 1000000;

      store.principal = 1000001;
      expect(store.principal).toBe(1000000);
    });

    it('Zero principal makes zero money', () => {
      const store = new InterestStore();
      store.principal = 0;
      store.rate = 1.0;
      store.time = Time.NinetyDays;
      store.type = CompoundingType.Daily;

      expect(store.total).toBe(0);
    });
  });
});
