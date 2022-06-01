import { UseFormReturn } from 'react-hook-form';
import FormAreaControl from '@components/molecules/Form/FormAreaControl';
import FormControl from '@components/molecules/Form/FormControl';
import FormDateTimeControl from '@components/molecules/Form/FormDateTimeControl';
import FormRadioControl from '@components/molecules/Form/FormRadioControl';
import { MeetingStatusOptions } from '@utils/constant';
import { NewMeetingInput } from '@utils/validations';
import FormSelectControl from '@components/molecules/Form/FormSelectControl';

interface Props {
  methods: UseFormReturn<NewMeetingInput>;
  roomsOptions: {
    label: string;
    value: number;
  }[];
}

export default function CreateMeetingDetailForms({
  methods,
  roomsOptions,
}: Props) {
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
        <FormDateTimeControl withTime label="Start Time" id="date_start" />
        <FormDateTimeControl
          withTime
          minDate={methods.watch('date_start')}
          label="End Time"
          id="date_end"
        />
      </div>

      <div className="grid h-fit grid-cols-1 gap-3">
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
            options={roomsOptions}
          />
        )}
      </div>
    </>
  );
}
