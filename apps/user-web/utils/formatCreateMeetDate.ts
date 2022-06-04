import { addWeeks, addDays, addMonths, format } from 'date-fns';
import { SERVER_DATE_FOR } from './constant';

interface Params {
  limit: number;
  dateStart: Date;
  dateEnd: Date;
  repeat?: 'day' | 'week' | 'month';
}

export function formatCreateMeetDate({
  dateEnd,
  dateStart,
  limit,
  repeat,
}: Params) {
  /**  create array, with default length to one, and start and end date as default value */
  let regularDateStart = new Array<string>(limit).fill(
    format(dateStart, SERVER_DATE_FOR)
  );
  let regularDateEnd = new Array<string>(limit).fill(
    format(dateEnd, SERVER_DATE_FOR)
  );

  if (limit > 1) {
    regularDateStart = regularDateStart.map((rdv, idx) => {
      if (repeat === 'day')
        return format(addDays(new Date(rdv), idx), SERVER_DATE_FOR);

      if (repeat === 'week')
        return format(addWeeks(new Date(rdv), idx), SERVER_DATE_FOR);

      if (repeat === 'month')
        return format(addMonths(new Date(rdv), idx), SERVER_DATE_FOR);

      return format(new Date(rdv), SERVER_DATE_FOR);
    });

    regularDateEnd = regularDateEnd.map((rdv, idx) => {
      if (repeat === 'day')
        return format(addDays(new Date(rdv), idx), SERVER_DATE_FOR);

      if (repeat === 'week')
        return format(addWeeks(new Date(rdv), idx), SERVER_DATE_FOR);

      if (repeat === 'month')
        return format(addMonths(new Date(rdv), idx), SERVER_DATE_FOR);

      return format(new Date(rdv), SERVER_DATE_FOR);
    });
  }

  return { regularDateStart, regularDateEnd };
}
