import { useFormContext } from 'react-hook-form';
import Label from '@components/atoms/Form/Label';
import DateTimePicker from '@components/atoms/Form/DateTimePicker';

interface Props {
  label: string;
  id: string;
  placeholder?: string;
  readOnly?: boolean;
  intervals?: number;
  helperText?: string;
  dateFormat?: 'MMMM d, yyyy h:mm aa';
  timeFormat?: 'HH:mm';
}

export default function FormDateTimeControl({
  label,
  id,
  helperText,
  ...others
}: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col justify-start gap-0.5">
      <Label id={id}>{label}</Label>
      <DateTimePicker id={id} {...others} />
      <div>
        {helperText !== '' && (
          <p className="text-xs text-gray-500">{helperText}</p>
        )}
        {errors && errors[id] && (
          <span className="-mt-4 text-xs text-red-500">
            {errors[id].message}
          </span>
        )}
      </div>
    </div>
  );
}
