import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import Input from '@components/atoms/Form/Input';
import Label from '@components/atoms/Form/Label';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  type: string;
  leftIcon?: JSX.Element;
  readOnly?: boolean;
  placeholder?: string;
  helperText?: string;
}

export default function FormControl({
  label,
  id,
  type,
  placeholder,
  helperText,
  leftIcon,
  readOnly = false,
  ...others
}: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col justify-start gap-0.5">
      {label && <Label id={id}>{label}</Label>}
      <Input
        id={id}
        type={type}
        readOnly={readOnly}
        placeholder={placeholder}
        leftIcon={leftIcon}
        {...others}
      />
      <div>
        {helperText !== '' && (
          <p className="text-xs text-gray-500 dark:text-gray-300">
            {helperText}
          </p>
        )}
        {errors && id && errors[id] && (
          <span className="text-xs text-red-500 dark:text-red-500">
            {errors[id].message}
          </span>
        )}
      </div>
    </div>
  );
}
