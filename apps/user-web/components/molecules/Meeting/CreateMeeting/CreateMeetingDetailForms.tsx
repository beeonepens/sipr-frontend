import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import FormAreaControl from '@components/molecules/Form/FormAreaControl';
import FormControl from '@components/molecules/Form/FormControl';
import FormDateTimeControl from '@components/molecules/Form/FormDateTimeControl';
import FormRadioControl from '@components/molecules/Form/FormRadioControl';
import { MeetingStatusOptions } from '@utils/constant';
import { NewMeetingInput } from '@utils/validations';
import FormSelectControl from '@components/molecules/Form/FormSelectControl';
import Checkbox from '@components/atoms/Form/Checkbox';
import StatelessFormRadioControl from '@components/molecules/Form/StatelessFormRadioControl';
import { useWindowSize } from '@utils/hooks/useWindowSize';

interface Props {
  methods: UseFormReturn<NewMeetingInput>;
  roomsOptions: {
    label: string;
    value: number;
  }[];
}

export interface IRepeatOptions {
  label: string;
  value: 'day' | 'week' | 'month';
}

export const repeatOptions: IRepeatOptions[] = [
  { label: 'Every Day', value: 'day' },
  { label: 'Every Week', value: 'week' },
  { label: 'Every Month', value: 'month' },
];

export default function CreateMeetingDetailForms({
  methods,
  roomsOptions,
}: Props) {
  const { watch, setValue } = methods;
  const windowSize = useWindowSize();
  const [isRegular, setIsRegular] = useState<0 | 1>(0);

  function handleRegularMeetCheckbox() {
    setIsRegular((cv) => (cv === 1 ? 0 : 1));
  }

  function handleRepeatTimeChange(val: IRepeatOptions['value']) {
    setValue('repeat_duration', val);
  }

  console.log(watch('limit'), watch('repeat_duration'));
  console.log({ isRegular });
  return (
    <>
      <div className="grid h-fit grid-cols-1 gap-3">
        <FormControl
          label="Name"
          id="name"
          aria-label="meeting name"
          type="text"
        />
        <FormAreaControl
          rows={4}
          label="Description"
          id="description"
          aria-label="meeting description"
        />
        <FormRadioControl
          id="isOnline"
          title="Status"
          options={MeetingStatusOptions}
        />
        {watch('isOnline') === 'online' ? (
          <FormControl
            label="Link to Meeting"
            id="onlineLink"
            aria-label="meeting location"
            type="text"
          />
        ) : (
          <FormSelectControl
            label="Room"
            placeholder="Select Offline Room"
            id="offlineLoc"
            menuPlacement={windowSize < 768 ? 'auto' : 'top'}
            options={roomsOptions}
          />
        )}
      </div>

      <div className="grid h-fit grid-cols-1 gap-3">
        <FormDateTimeControl withTime label="Start Time" id="date_start" />
        <FormDateTimeControl
          withTime
          minDate={watch('date_start')}
          label="End Time"
          id="date_end"
        />

        <Checkbox
          id="regular-meeting"
          label="Repeat Meeting"
          className="mt-4 md:mt-2"
          value={isRegular}
          onClick={handleRegularMeetCheckbox}
        />

        {isRegular === 1 && (
          <div className="mb-4 md:mb-0">
            <StatelessFormRadioControl
              id="repeat-option"
              title="Repeat"
              options={repeatOptions}
              handleChange={handleRepeatTimeChange}
              selected={watch('repeat_duration') as string}
              topLabel
            />

            <FormControl
              label="Repeat Limit"
              id="limit"
              aria-label="repeat-limit"
              type="text"
              pattern="^([1-9]|[12]\d|3[0-6])$"
            />
          </div>
        )}
      </div>
    </>
  );
}
