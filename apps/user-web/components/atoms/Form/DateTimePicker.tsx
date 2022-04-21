// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import clsx from 'clsx';
import ReactDatePicker from 'react-datepicker';
import { useFormContext, Controller } from 'react-hook-form';
import { CalendarIcon } from '@heroicons/react/outline';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  id: string;
  placeholder?: string;
  readOnly?: boolean;
  intervals?: number;
  dateFormat?:
    | 'MMMM d, yyyy h:mm aa'
    | 'd MMMM yyyy, HH:mm'
    | 'dd/MM/yyyy HH:mm';
  timeFormat?: 'HH:mm';
}

export default function DateTimePicker({
  id,
  readOnly = false,
  placeholder,
  intervals = 15,
  dateFormat = 'dd/MM/yyyy HH:mm',
  timeFormat = 'HH:mm',
}: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={new Date()}
      name={id}
      render={({ field: { onChange, onBlur, value } }) => (
        <div className="relative">
          <ReactDatePicker
            name={id}
            onBlur={onBlur}
            onChange={onChange}
            selected={value}
            className={clsx(
              // eslint-disable-next-line no-nested-ternary
              readOnly
                ? 'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0'
                : errors && errors[id]
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'focus:ring-primary-600 focus:border-primary-600 border-gray-300',
              'block w-full rounded-lg sm:text-sm'
            )}
            placeholderText={placeholder}
            aria-describedby={id}
            showTimeSelect
            openToDate={value ?? new Date()}
            timeCaption="Time"
            timeIntervals={intervals}
            timeFormat={timeFormat}
            dateFormat={dateFormat}
            readOnly={readOnly}
            // showMonthDropdown
            // showYearDropdown
            // dropdownMode="select"
          />
          <CalendarIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-lg text-gray-500" />
        </div>
      )}
    />
  );
}
