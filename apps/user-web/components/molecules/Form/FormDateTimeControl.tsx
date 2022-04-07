import Label from '@components/atoms/Form/Label';
import React from 'react';
import DateTimePicker from '@components/atoms/Form/DateTimePicker';

interface Props {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
  id: string;
  error?: boolean;
  onBlur?: () => void;
  placeholder?: string;
  readOnly?: boolean;
  intervals?: number;
  dateFormat?: 'MMMM d, yyyy h:mm aa';
  timeFormat?: 'HH:mm';
}

export default function FormDateTimeControl({ label, id, ...others }: Props) {
  return (
    <div className="flex flex-col justify-start gap-1">
      <Label id={id}>{label}</Label>
      <DateTimePicker id={id} {...others} />
    </div>
  );
}
