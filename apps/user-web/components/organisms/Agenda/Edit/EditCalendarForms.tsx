import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormAreaControl from '@components/molecules/Form/FormAreaControl';
import FormControl from '@components/molecules/Form/FormControl';
import FormDateTimeControl from '@components/molecules/Form/FormDateTimeControl';
import FormRadioControl from '@components/molecules/Form/FormRadioControl';
import { MeetingStatusOptions } from '@utils/constant';
import { NewMeetingInput, NewMeetingSchema } from '@utils/validations';
import { Button } from 'ui';
import LinkTo from '@components/atoms/LinkTo';

export default function EditCalendarForms() {
  const methods = useForm<NewMeetingInput>({
    resolver: zodResolver(NewMeetingSchema),
    defaultValues: {
      name: 'Kuliah RPL/WPPL',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur.',
      isOnline: true,
      startDate: new Date(2022, 3, 11, 8, 0),
      endDate: new Date(2022, 3, 11, 12, 0),
      location: 'https://meet.google.com/abcdef',
    },
  });

  /** function that run on form-submit */
  const onSubmit: SubmitHandler<NewMeetingInput> = (data) => {
    console.log(data);
  };

  /** form error log */
  if (methods.formState.errors) console.log({ f: methods.formState.errors });

  return (
    <div className="mx-4 my-6 lg:mx-8">
      <h3 className="text-primary-700 mb-4 text-2xl font-semibold leading-6">
        Edit Meeting Details
      </h3>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {/* meeting details */}
          <div className="mx-0 grid grid-cols-1 gap-4 lg:mx-8 lg:grid-cols-2 lg:gap-8">
            <section className="grid grid-cols-1 gap-2 lg:gap-4">
              <FormControl id="name" type="text" label="Name" />
              <FormAreaControl
                label="Description"
                id="description"
                aria-label="meeting description"
              />
              <FormDateTimeControl label="Start Time" id="startDate" />
              <FormDateTimeControl label="End Time" id="endDate" />
              <FormRadioControl
                title="Status"
                options={MeetingStatusOptions}
                disabled="offline"
                selected="online"
              />
              <FormControl
                label="Link to Meeting"
                id="location"
                aria-label="meeting location"
                type="text"
              />
            </section>
          </div>

          <div className="mt-6 flex flex-row justify-end gap-6 md:mt-4">
            <LinkTo to="/agenda">
              <Button text="sm" type="button" variant="outline">
                Cancel
              </Button>
            </LinkTo>
            <Button text="sm" type="submit">
              Save
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
