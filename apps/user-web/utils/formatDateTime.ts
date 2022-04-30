import { differenceInHours, differenceInMinutes, format } from 'date-fns';

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
export const formatToMs = (date: string) => new Date(date).getTime();

/** result: 45 minutes or 3 Hours */
export const getTimeDifference = (
  startDate: string,
  endDate: null | string = null
) => {
  if (differenceInMinutes(new Date(startDate), new Date()) < 60) {
    if (endDate)
      return (
        // eslint-disable-next-line prefer-template
        differenceInMinutes(new Date(startDate), new Date(endDate)) + ' Minutes'
      );

    // eslint-disable-next-line prefer-template
    return differenceInMinutes(new Date(startDate), new Date()) + ' Minutes';
  }

  if (endDate)
    return (
      // eslint-disable-next-line prefer-template
      differenceInHours(new Date(startDate), new Date(endDate)) + ' Hours'
    );

  // eslint-disable-next-line prefer-template
  return differenceInHours(new Date(startDate), new Date()) + ' Hours';
};
