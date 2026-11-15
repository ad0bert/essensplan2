export default class DateUtils {
  static getToday(): Date {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }

  static addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  /** Returns the Monday (00:00) of the week containing `date`. */
  static getStartOfWeek(date: Date): Date {
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const day = startDate.getDay();
    startDate.setDate(startDate.getDate() - day + (day === 0 ? -6 : 1));
    return startDate;
  }

  static isSameDay(a: Date, b: Date): boolean {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }
}
