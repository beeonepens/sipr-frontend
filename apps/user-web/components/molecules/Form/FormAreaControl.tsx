import TextArea from '@components/atoms/Form/TextArea';
import Label from '@components/atoms/Form/Label';
import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  ref?: string;
}

export default function FormAreaControl({ label, id, ref, ...others }: Props) {
  return (
    <div className="flex flex-col justify-start gap-1">
      <Label id={id}>{label}</Label>
      <TextArea id={id} ref={ref} {...others} />
    </div>
  );
}
