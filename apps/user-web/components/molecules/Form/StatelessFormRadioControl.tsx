import Label from '@components/atoms/Form/Label';
import clsx from 'clsx';

interface Props {
  id: string;
  title: string;
  handleChange: (v: string) => void;
  selected?: string;
  disabled?: string;
  topLabel?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}

export default function StatelessFormRadioControl({
  title,
  selected,
  handleChange,
  disabled,
  options,
  topLabel = false,
  id,
}: Props) {
  return (
    <div
      className={clsx(
        'mt-1 mb-0 flex h-fit lg:mb-2',
        topLabel
          ? 'flex-col items-start justify-start gap-2'
          : 'flex-row items-center justify-between gap-3'
      )}
    >
      {/* <legend className="w-1/3 text-gray-700">{title}</legend> */}
      <span className="mb-0.5 w-1/3">
        <Label id={id}>{title}</Label>
      </span>
      {topLabel ? (
        <div className="flex w-full flex-row items-center justify-between gap-x-4">
          {options.map(({ label, value }) => (
            <div key={value}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="inline-flex items-center">
                <input
                  className={clsx(
                    'form-radio',
                    value === disabled
                      ? 'cursor-not-allowed border-gray-400 text-gray-400 dark:border-gray-500 dark:text-gray-500'
                      : 'cursor-pointer'
                  )}
                  type="radio"
                  onChange={() => handleChange(value)}
                  disabled={value === disabled}
                  checked={value === selected}
                  // defaultChecked={value === selected}
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
        </div>
      ) : (
        options.map(({ label, value }) => (
          <div key={value}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="inline-flex items-center">
              <input
                className={clsx(
                  'form-radio',
                  value === disabled
                    ? 'cursor-not-allowed border-gray-400 text-gray-400 dark:border-gray-500 dark:text-gray-500'
                    : 'cursor-pointer'
                )}
                type="radio"
                onChange={() => handleChange(value)}
                disabled={value === disabled}
                checked={value === selected}
                // defaultChecked={value === selected}
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
        ))
      )}
    </div>
  );
}
