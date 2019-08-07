export default class DateUtils {
    static getToday(): Date {
        const date = new Date();
        date.setHours(0,0,0,0);
        return date; 
    }
    static addDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
}