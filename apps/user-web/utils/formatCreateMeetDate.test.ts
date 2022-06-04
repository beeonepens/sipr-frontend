import { expect, test } from 'vitest';
import { formatCreateMeetDate } from './formatCreateMeetDate';

const dateStart = new Date(2022, 6, 1, 7, 30, 0);
const dateEnd = new Date(2022, 6, 1, 10, 0, 0);
const limit = 4;

test('daily regular meeting return correct set of date', () => {
  const dailyRegularMeeting = formatCreateMeetDate({
    dateStart,
    dateEnd,
    limit,
    repeat: 'day',
  });

  expect(dailyRegularMeeting.regularDateStart).toEqual([
    '2022-07-01:07:30',
    '2022-07-02:07:30',
    '2022-07-03:07:30',
    '2022-07-04:07:30',
  ]);

  expect(dailyRegularMeeting.regularDateEnd).toEqual([
    '2022-07-01:10:00',
    '2022-07-02:10:00',
    '2022-07-03:10:00',
    '2022-07-04:10:00',
  ]);
});

test('weekly regular meeting return correct set of date', () => {
  const weeklyRegularMeeting = formatCreateMeetDate({
    dateStart,
    dateEnd,
    limit,
    repeat: 'week',
  });

  expect(weeklyRegularMeeting.regularDateStart).toEqual([
    '2022-07-01:07:30',
    '2022-07-08:07:30',
    '2022-07-15:07:30',
    '2022-07-22:07:30',
  ]);

  expect(weeklyRegularMeeting.regularDateEnd).toEqual([
    '2022-07-01:10:00',
    '2022-07-08:10:00',
    '2022-07-15:10:00',
    '2022-07-22:10:00',
  ]);
});

test('monthly regular meeting return correct set of date', () => {
  const monthlyRegularMeeting = formatCreateMeetDate({
    dateStart,
    dateEnd,
    limit,
    repeat: 'month',
  });

  expect(monthlyRegularMeeting.regularDateStart).toEqual([
    '2022-07-01:07:30',
    '2022-08-01:07:30',
    '2022-09-01:07:30',
    '2022-10-01:07:30',
  ]);

  expect(monthlyRegularMeeting.regularDateEnd).toEqual([
    '2022-07-01:10:00',
    '2022-08-01:10:00',
    '2022-09-01:10:00',
    '2022-10-01:10:00',
  ]);
});
