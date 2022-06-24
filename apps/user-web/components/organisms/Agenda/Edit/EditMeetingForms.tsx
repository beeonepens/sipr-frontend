import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import {
  Datetime,
  MeetBase as Meet,
  UpdateMeetParam,
} from '@utils/types/meet.dto';
import FormAreaControl from '@components/molecules/Form/FormAreaControl';
import FormControl from '@components/molecules/Form/FormControl';
import FormDateTimeControl from '@components/molecules/Form/FormDateTimeControl';
import FormRadioControl from '@components/molecules/Form/FormRadioControl';
import { MeetingStatusOptions, handleOpenToast } from '@utils/constant';
import { NewMeetingInput, NewMeetingSchema } from '@utils/validations';
import { Button } from 'ui';
import LinkTo from '@components/atoms/LinkTo';
import FormSelectControl from '@components/molecules/Form/FormSelectControl';
import EditMeetingToast from '@components/molecules/Agenda/Edit/EditMeetingToast';
import { updateMeeting } from '@utils/mutations/meetMutation';
import { NewRoomResponse, Room } from '@utils/types/room.dto';
import { NewRoomInput } from '@utils/validations/newRoomVal';
import { createRoom } from '@utils/mutations/roomMutatin';
import { getRepeatDuration } from '@utils/formatDateTime';
import Checkbox from '@components/atoms/Form/Checkbox';
import StatelessFormRadioControl from '@components/molecules/Form/StatelessFormRadioControl';
import { repeatOptions } from '@components/molecules/Meeting/CreateMeeting/CreateMeetingDetailForms';

interface Props {
  meet: Meet;
  datetime: Datetime[];
  rooms: Room[];
}

export default function EditMeetingForms({ datetime, rooms, meet }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [isRegular, setIsRegular] = useState<0 | 1>(0);

  function handleRegularMeetCheckbox() {
    setIsRegular((cv) => (cv === 1 ? 0 : 1));
  }

  /** filter only offline room & format room options list */
  const roomsOptions = useMemo(() => {
    if (!rooms) return [];
    return rooms
      .filter((room) => room.isOnline === 0)
      .map((room) => ({
        label: `${room.description} (${room.name_room})`,
        value: room.id_room,
      }));
  }, [rooms]);

  const methods = useForm<NewMeetingInput>({
    resolver: zodResolver(NewMeetingSchema),
    /** use current meeting detal as form default value */
    defaultValues: {
      name: meet.name_meeting,
      description: meet.description,
      isOnline: meet.isOnline ? 'online' : 'offline',
      date_start: new Date(datetime[0].start_datetime),
      date_end: new Date(datetime[0].end_datetime),
      limit: datetime.length.toString(),
      onlineLink: rooms.find((r) => r.id_room === meet.room_id).name_room,
      offlineLoc: roomsOptions.find((ro) => ro.value === meet.room_id),
      /** if datetime length > 1, get time difference */
      repeat_duration:
        datetime.length > 1
          ? getRepeatDuration(
              datetime[0].start_datetime,
              datetime[1].start_datetime
            )
          : 'day',
    },
  });

  function handleRepeatTimeChange(val: typeof repeatOptions[number]['value']) {
    methods.setValue('repeat_duration', val);
  }

  /** hooks for update meeting mutation */
  const meetingMutation = useMutation<unknown, AxiosError, UpdateMeetParam>(
    updateMeeting
  );
  /** hooks for create room mutation */
  const roomMutation = useMutation<NewRoomResponse, AxiosError, NewRoomInput>(
    createRoom
  );

  /** function that run on form-submit */
  const onSubmit: SubmitHandler<NewMeetingInput> = (data) => {
    setIsLoading(true);
    console.log(data);

    /** Offline meeting action */
    if (data.isOnline === 'offline') {
      meetingMutation.mutate(
        {
          meet: { ...data, room_id: data.offlineLoc?.value },
          id: String(meet.id_meet),
        },
        {
          // eslint-disable-next-line no-shadow
          onError: ({ message, response }) => {
            setIsLoading(false);
            console.log({ message, response });
          },
          // eslint-disable-next-line no-shadow
          onSuccess: ({ data: meet, message }) => {
            if (message === 'Succesfull') {
              console.log({ meet, message });
              setIsLoading(false);
              handleOpenToast(openToast, setOpenToast);
            }
          },
        }
      );
    } else {
      /** Online meeting action */
      const newRoomData = {
        name_room: data.onlineLink,
        description: data.onlineLink,
        isBooked: true,
        isOnline: data.isOnline === 'online',
      };

      /** create room mutation */
      console.log('create room');
      roomMutation.mutate(newRoomData, {
        onError: ({ message, response }) => {
          setIsLoading(false);
          console.log({ message, response });
        },
        onSuccess: ({ data: room, message }) => {
          console.log({ room, message });
          /** if room mutation success, run meeting mutation */
          if (message === 'Succes') {
            console.log('create meeting');
            meetingMutation.mutate(
              {
                meet: { ...data, room_id: room[0].id_room },
                id: String(meet.id_meet),
              },
              {
                // eslint-disable-next-line no-shadow
                onError: ({ message, response }) => {
                  setIsLoading(false);
                  console.log({ message, response });
                },
                // eslint-disable-next-line no-shadow
                onSuccess: ({ data: meet, message }) => {
                  if (message === 'Succesfull') {
                    console.log({ meet, message });
                    setIsLoading(false);
                    handleOpenToast(openToast, setOpenToast);
                  }
                },
              }
            );
          }
        },
      });
    }
  };

  /** form error log */
  if (methods.formState.errors !== {}) console.log(methods.formState.errors);

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="w-full rounded-lg border border-gray-300 bg-white p-6 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:bg-gray-800 dark:shadow-black/20"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {/* meeting details */}
          <div className="mx-0 grid grid-cols-1 gap-4 lg:mx-8 lg:gap-8 xl:grid-cols-2">
            <section className="grid h-fit grid-cols-1 gap-y-2 lg:gap-y-4">
              <FormControl id="name" type="text" label="Name" />
              <FormAreaControl
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
                  menuPlacement="auto"
                  label="Room"
                  placeholder="Select Offline Room"
                  id="offlineLoc"
                  options={roomsOptions}
                />
              )}
            </section>

            <section className="grid h-fit grid-cols-1 items-start justify-start gap-y-2 lg:gap-y-4">
              <FormDateTimeControl
                withTime
                label="Start Time"
                id="date_start"
              />
              <FormDateTimeControl
                withTime
                label="End Time"
                minDate={methods.watch('date_start')}
                id="date_end"
              />
              <Checkbox
                id="regular-meeting"
                label="Repeat Meeting"
                className="mt-4 md:mt-2"
                value={isRegular}
                onClick={handleRegularMeetCheckbox}
              />

              <div className={isRegular ? 'visible mb-4 md:mb-0' : 'invisible'}>
                <StatelessFormRadioControl
                  id="repeat-option"
                  title="Repeat"
                  options={repeatOptions}
                  handleChange={handleRepeatTimeChange}
                  selected={methods.watch('repeat_duration') as string}
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
            </section>
          </div>

          <div className="mt-8 flex flex-row justify-end gap-6 lg:mt-8">
            <LinkTo to="/agenda">
              <Button text="sm" type="button" variant="outline">
                Cancel
              </Button>
            </LinkTo>
            <Button isLoading={isLoading} text="sm" type="submit">
              Save
            </Button>
          </div>
        </form>
      </FormProvider>

      <EditMeetingToast
        open={openToast}
        setOpen={setOpenToast}
        meetName={methods.watch('name') || 'Meeting'}
      />
    </>
  );
}
