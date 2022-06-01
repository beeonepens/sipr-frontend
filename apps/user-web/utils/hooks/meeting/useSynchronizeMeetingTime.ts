import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { NewMeetingInput } from '@utils/validations';

export const useSynchronizeMeetingTime = (
  startTime: Date,
  endTime: Date,
  methods: UseFormReturn<NewMeetingInput>
) => {
  useEffect(() => {
    if (startTime.getTime() > endTime.getTime()) {
      methods.setValue('date_end', startTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTime, endTime]);
};
