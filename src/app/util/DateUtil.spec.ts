import DateUtils from './DateUtil';

describe('DateUtils', () => {
  it('returns Monday for every day of the week', () => {
    // 2026-11-09 is a Monday.
    for (let day = 9; day <= 15; day++) {
      const monday = DateUtils.getStartOfWeek(new Date(2026, 10, day, 15, 30));
      expect(monday).toEqual(new Date(2026, 10, 9));
    }
  });

  it('handles weeks spanning a month boundary', () => {
    expect(DateUtils.getStartOfWeek(new Date(2026, 10, 1))).toEqual(new Date(2026, 9, 26));
  });

  it('adds days without mutating the input', () => {
    const date = new Date(2026, 11, 30);
    expect(DateUtils.addDays(date, 3)).toEqual(new Date(2027, 0, 2));
    expect(date).toEqual(new Date(2026, 11, 30));
  });

  it('compares calendar days', () => {
    expect(DateUtils.isSameDay(new Date(2026, 0, 1, 8), new Date(2026, 0, 1, 23))).toBe(true);
    expect(DateUtils.isSameDay(new Date(2026, 0, 1), new Date(2026, 0, 2))).toBe(false);
  });
});
