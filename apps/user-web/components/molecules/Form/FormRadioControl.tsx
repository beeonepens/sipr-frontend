import Label from '@components/atoms/Form/Label';
import clsx from 'clsx';
import * as React from 'react';

interface Props {
  title: string;
  selected?: string;
  disabled?: string;
  options: {
    label: string;
    value: string;
  }[];
}

export default function FormRadioControl({
  title,
  selected,
  disabled,
  options,
}: Props) {
  return (
    <div className="mt-1 flex flex-row items-center justify-between gap-3">
      {/* <legend className="w-1/3 text-gray-700">{title}</legend> */}
      <span className="mb-0.5 w-1/3">
        <Label id="meeting-status">{title}</Label>
      </span>
      {/* <div> */}
      {options.map(({ label, value }) => (
        <div key={value}>
          <label className="inline-flex items-center" htmlFor={value}>
            <input
              className={clsx(
                'form-radio',
                value === disabled
                  ? 'cursor-not-allowed border-gray-400 text-gray-400'
                  : 'cursor-pointer'
              )}
              type="radio"
              id={value}
              disabled={value === disabled}
              defaultChecked={value === selected}
              name="radio-direct"
              value={value}
            />
            <span
              className={clsx(
                'ml-2 text-sm',
                value === disabled && 'cursor-not-allowed text-gray-400'
              )}
            >
              {label}
            </span>
          </label>
        </div>
      ))}

      {/* </div> */}
    </div>
  );
}
