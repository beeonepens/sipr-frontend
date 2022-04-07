import 'react-datepicker/dist/react-datepicker.css';
import clsx from 'clsx';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import ClockIcon from '../Icon/ClockIcon';

interface Props {
  value: Date;
  onChange: (date: Date) => void;
  id: string;
  error?: boolean;
  onBlur?: () => void;
  placeholder?: string;
  readOnly?: boolean;
  intervals?: number;
  captions?: string;
  timeFormat?: 'h:mm aa';
}

export default function TimePicker({
  value,
  onChange,
  id,
  onBlur,
  error = false,
  readOnly = false,
  placeholder,
  intervals = 15,
  captions = 'Time',
  timeFormat = 'h:mm aa',
}: Props) {
  return (
    <div className="relative mt-1">
      <ReactDatePicker
        name={id}
        onBlur={onBlur}
        onChange={onChange}
        selected={value}
        className={clsx(
          // eslint-disable-next-line no-nested-ternary
          readOnly
            ? 'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0'
            : error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'focus:ring-primary-850 focus:border-primary-850 border-gray-300',
          'block w-full rounded-lg sm:text-sm'
        )}
        placeholderText={placeholder}
        aria-describedby={id}
        showTimeSelect
        showTimeSelectOnly
        openToDate={value ?? new Date()}
        timeCaption={captions}
        timeIntervals={intervals}
        dateFormat={timeFormat}
        readOnly={readOnly}
      />
      <ClockIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-lg text-gray-500" />
    </div>
  );
}
