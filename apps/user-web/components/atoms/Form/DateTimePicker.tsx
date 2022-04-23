// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import clsx from 'clsx';
import ReactDatePicker from 'react-datepicker';
import { useFormContext, Controller } from 'react-hook-form';
import { CalendarIcon } from '@heroicons/react/outline';

// import 'react-datepicker/dist/react-datepicker.css';

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
  withTime?: boolean;
  defaultValue?: Date;
}

export default function DateTimePicker({
  id,
  readOnly = false,
  placeholder,
  intervals = 15,
  dateFormat = 'dd/MM/yyyy HH:mm',
  timeFormat = 'HH:mm',
  withTime = false,
  defaultValue,
}: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={defaultValue || new Date()}
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
                ? 'cursor-not-allowed border-gray-300 bg-gray-100 focus:border-gray-300 focus:ring-0 dark:border-gray-800 dark:bg-zinc-700'
                : errors && errors[id]
                ? 'border-red-600 focus:border-red-800 focus:ring-red-800 dark:border-red-600 dark:focus:border-red-500 dark:focus:ring-red-500'
                : 'focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-300 dark:focus:ring-primary-300 border-gray-300 dark:border-zinc-600',
              'block w-full rounded-lg bg-white dark:bg-zinc-800 dark:text-gray-300 dark:caret-zinc-500 sm:text-sm'
            )}
            placeholderText={placeholder}
            aria-describedby={id}
            showTimeSelect={!!withTime}
            openToDate={value ?? new Date()}
            timeCaption={withTime ? 'Time' : ''}
            timeIntervals={withTime ? intervals : 0}
            timeFormat={withTime ? timeFormat : ''}
            dateFormat={withTime ? dateFormat : 'dd/MM/yyyy'}
            readOnly={readOnly}
            // showMonthYearPicker
            showMonthDropdown={!withTime}
            showYearDropdown={!withTime}
            dropdownMode="select"
          />
          <CalendarIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-lg text-gray-500 dark:text-gray-300" />
        </div>
      )}
    />
  );
}
