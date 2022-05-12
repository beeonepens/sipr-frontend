import { addMinutes, format } from 'date-fns';
import { expect, test } from 'vitest';
import {
  formatDate,
  formatDateWithDay,
  formatMeetDateTime,
  formatMeetTime,
  formatTime,
  formatToMs,
  getTimeDifference,
} from './formatDateTime';

test('return date with d MMM yyyy format', () => {
  const date = '2022-05-10:13:00';
  const formattedDate = formatDate(date);

  expect(formattedDate).toEqual('10 May 2022');
});

test('return date with day name', () => {
  const date = '2022-05-10:13:00';
  const formattedDate = formatDateWithDay(date);

  expect(formattedDate).toEqual('Tuesday, 10 May 2022');
});

test('return meeting time with date, start time, and end time', () => {
  const startDate = '2022-05-10:13:00';
  const endDate = '2022-05-10:14:00';
  const formattedDate = formatMeetDateTime(startDate, endDate);

  expect(formattedDate).toEqual('10 May 2022, 13:00 - 14:00');
});

test('return meeting time with start and end time', () => {
  const startDate = '2022-05-10:13:00';
  const endDate = '2022-05-10:14:00';
  const formattedDate = formatMeetTime(startDate, endDate);

  expect(formattedDate).toEqual('13:00 - 14:00');
});

test('return time with HH:mm format', () => {
  const dateTime = '2022-05-10:13:00';
  const formattedTime = formatTime(dateTime);

  expect(formattedTime).toEqual('13:00');
});

test('return time in milisecond', () => {
  const dateTime = '2022-05-10:13:00';
  const formattedTime = formatToMs(dateTime);

  expect(formattedTime).toEqual(new Date('2022-05-10:13:00').getTime());
});

test('return time diference in hour', () => {
  const startTime = '2022-05-10:13:00';
  const endTime = '2022-05-10:15:00';
  const formattedTime = getTimeDifference(startTime, endTime);

  expect(formattedTime).toEqual('2 Hours');
});

test('return time diference in minutes', () => {
  /** create date 15 minutes from now and format it as string bellow */
  const startTime = format(addMinutes(new Date(), 15), 'yyyy-MM-dd:HH:mm');
  /** get time difference betwen above time with current time */
  const formattedTime = getTimeDifference(startTime);

  expect(formattedTime).toEqual('14 Minutes');
});
