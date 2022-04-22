import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import TextArea from '@components/atoms/Form/TextArea';
import Label from '@components/atoms/Form/Label';

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  rows?: number;
  readOnly?: boolean;
  placeholder?: string;
  helperText?: string;
}

export default function FormAreaControl({
  label,
  id,
  rows,
  placeholder,
  readOnly,
  helperText,
  ...others
}: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col justify-start gap-0.5">
      <Label id={id}>{label}</Label>
      <TextArea
        id={id}
        rows={rows}
        readOnly={readOnly}
        placeholder={placeholder}
        {...others}
      />
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
