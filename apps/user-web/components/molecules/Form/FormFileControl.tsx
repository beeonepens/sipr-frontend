import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import Label from '@components/atoms/Form/Label';
import InputFile from '@components/atoms/Form/InputFile';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  rows?: number;
  readOnly?: boolean;
  helperText?: string;
  format?: string;
}

export default function FormFileControl({
  label,
  format,
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
      <InputFile id={id} format={format} {...others} />
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
