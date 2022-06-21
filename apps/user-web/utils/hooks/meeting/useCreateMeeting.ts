import type { SubmitHandler } from 'react-hook-form';

import * as React from 'react';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { handleOpenToast } from '@utils/constant';
import { NewMeetingInput } from '@utils/validations';
import { NewMeetingResponse } from '@utils/types/meet.dto';
import { createMeeting } from '@utils/mutations/meetMutation';
import { createRoom } from '@utils/mutations/roomMutatin';
import { NewRoomResponse, Room } from '@utils/types/room.dto';
import { NewRoomInput } from '@utils/validations/newRoomVal';
import { useParticipantStore } from '@utils/store/useCreateMeetParticipant';

interface Params {
  rooms: Room[];
  toggleModal: () => void;
}

export const useCreateMeeting = ({ rooms, toggleModal }: Params) => {
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = React.useState(false);
  const [openToast, setOpenToast] = React.useState(false);
  const { personParticipants, resetPersonParticipant } = useParticipantStore();

  /** hooks for create meeting mutation */
  const meetingMutation = useMutation<
    NewMeetingResponse,
    AxiosError,
    NewMeetingInput
  >(createMeeting);

  /** hooks for create room mutation */
  const roomMutation = useMutation<NewRoomResponse, AxiosError, NewRoomInput>(
    createRoom
  );

  /** filter only offline room & format room options list */
  const roomsOptions = React.useMemo(() => {
    if (!rooms) return [];
    return rooms
      .filter((room) => room.isOnline === 0)
      .map((room) => ({
        label: `${room.description} (${room.name_room})`,
        value: room.id_room,
      }));
  }, [rooms]);

  /** function for handling new meeting mutation */
  const handleMeetingMutation = (
    meetData: NewMeetingInput,
    roomId?: number
  ) => {
    meetingMutation.mutate(
      {
        ...meetData,
        room_id: roomId,
        participants: personParticipants.map((person) => person.id),
        teams: [],
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
            queryClient.invalidateQueries([
              'meetings',
              typeof window !== 'undefined' && localStorage.getItem('uid'),
            ]);
            queryClient.invalidateQueries([
              'datetimes',
              typeof window !== 'undefined' && localStorage.getItem('uid'),
            ]);
            setIsLoading(false);
            handleOpenToast(openToast, setOpenToast);
            resetPersonParticipant();
            toggleModal();
          }
        },
      }
    );
  };

  /** function that run on form-submit */
  const onSubmit: SubmitHandler<NewMeetingInput> = (data) => {
    console.log(data);
    setIsLoading(true);

    /** Offline meeting action */
    if (data.isOnline === 'offline') {
      handleMeetingMutation(data, data.offlineLoc.value);
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
            handleMeetingMutation(data, room[0].id_room);
          }
        },
      });
    }
  };

  return { isLoading, openToast, setOpenToast, onSubmit, roomsOptions };
};
