import axios from 'axios';
import { API_URL } from '@utils/constant';

import type { NewMeetingInput } from '@utils/validations';
import type {
  NewMeetingResponse,
  UpdateMeetParam,
} from '@utils/types/meet.dto';
import { format } from 'date-fns';

export const createMeeting = async (meet: NewMeetingInput) => {
  const { data } = await axios.post<NewMeetingResponse>(
    `${API_URL}/api/meet/store`,
    {
      ...meet,
      room_id: meet.room_id,
      isOnline: meet.isOnline === 'online' ? 1 : 0,
      date_start: [format(meet.date_start, 'yyyy-MM-dd:HH:mm')],
      date_end: [format(meet.date_end, 'yyyy-MM-dd:HH:mm')],
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
  const { data } = await axios.put<NewMeetingResponse>(
    `${API_URL}/api/meet/update/${id}`,
    {
      ...meet,
      user_id: localStorage.getItem('uid'),
      room_id: meet.room_id,
      isOnline: meet.isOnline === 'online' ? 1 : 0,
      date_start: [format(meet.date_start, 'yyyy-MM-dd:HH:mm')],
      date_end: [format(meet.date_end, 'yyyy-MM-dd:HH:mm')],
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
