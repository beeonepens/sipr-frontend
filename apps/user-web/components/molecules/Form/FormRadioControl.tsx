import Label from '@components/atoms/Form/Label';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

interface Props {
  id: string;
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
  id,
}: Props) {
  const { register } = useFormContext();

  return (
    <div className="mt-1 mb-0 flex h-fit flex-row items-center justify-between gap-3 lg:mb-2">
      {/* <legend className="w-1/3 text-gray-700">{title}</legend> */}
      <span className="mb-0.5 w-1/3">
        <Label id="meeting-status">{title}</Label>
      </span>
      {/* <div> */}
      {options.map(({ label, value }) => (
        <div key={value}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="inline-flex items-center">
            <input
              {...register(id)}
              className={clsx(
                'form-radio',
                value === disabled
                  ? 'cursor-not-allowed border-gray-400 text-gray-400 dark:border-gray-500 dark:text-gray-500'
                  : 'cursor-pointer'
              )}
              type="radio"
              disabled={value === disabled}
              defaultChecked={value === selected}
              value={value}
            />
            <span
              className={clsx(
                'ml-2 text-sm text-gray-700 dark:text-gray-300',
                value === disabled &&
                  'cursor-not-allowed text-gray-400 dark:text-gray-500'
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
