import Input from '@components/atoms/Form/Input';
import Label from '@components/atoms/Form/Label';
import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type: string;
  ref?: string;
}

export default function FormControl({
  label,
  id,
  type,
  ref,
  ...others
}: Props) {
  return (
    <div className="flex flex-col justify-start gap-1">
      <Label id={id}>{label}</Label>
      <Input id={id} type={type} ref={ref} {...others} />
    </div>
  );
}
