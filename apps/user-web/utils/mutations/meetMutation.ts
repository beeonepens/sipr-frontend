import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { NewMeetingInput } from '@utils/validations';
import type {
  NewMeetingResponse,
  UpdateMeetParam,
} from '@utils/types/meet.dto';
import { formatCreateMeetDate } from '@utils/formatCreateMeetDate';

export const createMeeting = async (meet: NewMeetingInput) => {
  const { regularDateStart, regularDateEnd } = formatCreateMeetDate({
    dateStart: meet.date_start,
    dateEnd: meet.date_end,
    limit: Number(meet.limit) || 1,
    repeat: meet.repeat_duration,
  });

  // console.log({ regularDateStart, regularDateEnd, limit: meet.limit });
  const { data } = await axios.post<NewMeetingResponse>(
    `${API_URL}/api/meet/store`,
    {
      ...meet,
      room_id: meet.room_id,
      isOnline: meet.isOnline === 'online' ? 1 : 0,
      // date_start: [format(meet.date_start, SERVER_DATE_FOR)],
      // date_end: [format(meet.date_end, SERVER_DATE_FOR)],
      date_start: regularDateStart,
      date_end: regularDateEnd,
      participants:
        meet.teams.length > 0
          ? meet.participants
          : [...meet.participants, String(localStorage.getItem('uid'))],
      user_id: String(localStorage.getItem('uid')),
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return data;
};

export const updateMeeting = async ({ meet, id }: UpdateMeetParam) => {
  const { regularDateStart, regularDateEnd } = formatCreateMeetDate({
    dateStart: meet.date_start,
    dateEnd: meet.date_end,
    limit: Number(meet.limit) || 1,
    repeat: meet.repeat_duration,
  });

  const { data } = await axios.put<NewMeetingResponse>(
    `${API_URL}/api/meet/update/${id}`,
    {
      ...meet,
      name_meeting: meet.name,
      user_id: localStorage.getItem('uid'),
      room_id: meet.room_id,
      isOnline: meet.isOnline === 'online' ? 1 : 0,
      date_start: regularDateStart,
      date_end: regularDateEnd,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return data;
};

export const deleteMeeting = async (meetId: number) => {
  const { data } = await axios.delete<{ data?: unknown; message: string }>(
    `${API_URL}/api/meet/delete/${meetId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );

  return data;
};
