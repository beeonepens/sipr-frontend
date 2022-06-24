import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
} from 'date-fns';

/** result: 1 April 2022 */
export const formatDate = (date: string) =>
  format(new Date(date), 'd MMM yyyy');

/** result: Monday, 1 April 2022 */
export const formatDateWithDay = (date: string) =>
  format(new Date(date), 'eeee, d MMM yyyy');

/** result: 18:30 */
export const formatTime = (date: string) => format(new Date(date), 'HH:mm');

/** result: 16:15 - 18:30 */
export const formatMeetTime = (startDate: string, endDate: string) =>
  // eslint-disable-next-line prefer-template
  formatTime(startDate) + ' - ' + formatTime(endDate);

/** result: 1 April 2022, 16:15 - 18:30 */
export const formatMeetDateTime = (startDate: string, endDate: string) =>
  // eslint-disable-next-line prefer-template
  formatDate(startDate) +
  ', ' +
  formatTime(startDate) +
  ' - ' +
  formatTime(endDate);

/** result: 891723912548 */
export const formatToMs = (date?: string) => {
  if (date) return new Date(date).getTime();
  return new Date().getTime();
};

/** result: 45 minutes or 3 Hours */
export const getTimeDifference = (
  startDate: string,
  endDate: null | string = null
) => {
  if (
    differenceInMinutes(new Date(startDate), new Date()) > 60 ||
    differenceInMinutes(new Date(startDate), new Date()) < -60
  ) {
    if (endDate)
      return (
        // eslint-disable-next-line prefer-template
        Math.abs(differenceInHours(new Date(startDate), new Date(endDate))) +
        ' Hours'
      );

    return (
      // eslint-disable-next-line prefer-template
      Math.abs(differenceInHours(new Date(startDate), new Date())) + ' Hours'
    );
  }

  if (endDate)
    return (
      // eslint-disable-next-line prefer-template
      Math.abs(differenceInMinutes(new Date(startDate), new Date(endDate))) +
      ' Minutes'
    );

  return (
    // eslint-disable-next-line prefer-template
    Math.abs(differenceInMinutes(new Date(startDate), new Date())) + ' Minutes'
  );
};

/** return full day difference in number */
export const getDayDifference = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return differenceInDays(end, start);
};

export const getRepeatDuration = (startDate: string, endDate: string) => {
  const dayDiff = getDayDifference(startDate, endDate);

  if (dayDiff <= 7) return 'week';
  if (dayDiff <= 1) return 'day';

  return 'month';
};
