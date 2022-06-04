import { useEffect, useState } from 'react';
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
import StatelessInput from '@components/atoms/Form/StatelessInput';
import Label from '@components/atoms/Form/Label';
import { useWindowSize } from '@utils/hooks/useWindowSize';

interface Props {
  methods: UseFormReturn<NewMeetingInput>;
  roomsOptions: {
    label: string;
    value: number;
  }[];
}

const repeatOptions = [
  { label: 'Every Day', value: 'everyday' },
  { label: 'Every Week', value: 'everyweek' },
  { label: 'Every Month', value: 'everymonth' },
];

export default function CreateMeetingDetailForms({
  methods,
  roomsOptions,
}: Props) {
  const windowSize = useWindowSize();
  const [isRegular, setIsRegular] = useState<0 | 1>(0);
  const [repeat, setRepeat] =
    useState<typeof repeatOptions[number]['value']>('everyday');
  const [repeatFor, setRepeatFor] = useState<number>(1);

  useEffect(() => {
    if (repeatFor < 1) setRepeatFor(1);
    if (repeatFor > 20) setRepeatFor(20);
  }, [repeatFor]);

  function handleRegularMeetCheckbox() {
    setIsRegular((cv) => (cv === 1 ? 0 : 1));
  }
  function handleRepeatTimeChange(val: typeof repeatOptions[number]['value']) {
    setRepeat(val);
  }

  console.log({ isRegular, repeat, repeatFor });
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
        {methods.watch('isOnline') === 'online' ? (
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
          minDate={methods.watch('date_start')}
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
              selected={repeat}
              topLabel
            />

            <div className="mt-3 flex flex-col justify-start gap-0.5 md:mt-1">
              <Label id="repeat-for">Repeat For</Label>
              <StatelessInput
                id="repeat-for"
                type="number"
                min={1}
                max={20}
                value={repeatFor}
                onChange={(e) => setRepeatFor(Number(e.target.value))}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
