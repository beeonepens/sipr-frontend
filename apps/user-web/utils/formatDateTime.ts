import { format } from 'date-fns';

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
