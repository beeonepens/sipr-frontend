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

export default function CreateMeetingParticipantForms() {
  return (
    <div className="grid h-fit grid-cols-1 gap-3">
      <FormControl
        label="Participant"
        id="participant"
        aria-label="participant"
        type="text"
      />
    </div>
  );
}
