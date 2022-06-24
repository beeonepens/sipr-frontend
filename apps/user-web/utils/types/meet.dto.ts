import { NewMeetingInput } from '@utils/validations';

export interface UpdateMeetParam {
  meet: NewMeetingInput;
  id: string;
}

export interface Datetime {
  id_meet: number;
  start_datetime: string;
  end_datetime: string;
}

export interface MeetBase {
  id_meet: number;
  name_meeting: string;
  description: string;
  isOnline: number;
  created_at: string;
  updated_at: string;
  room_id: number;
  user_id: string;
}

export interface MeetForMember extends MeetBase {
  limit: number;
  id_invitation: number;
  isAccepted?: boolean;
  reason?: string;
  expiredDateTime: string;
  id_invitee: string;
  id_receiver: string;
}

export interface MeetWithDate extends MeetBase, Datetime {}

export interface NewMeetingResponse {
  data: {
    meet: MeetBase[];
    datetime: Datetime[];
  };
  message: string;
}

export interface GetMeetByMemberRes {
  data: {
    meet: MeetForMember[];
    datetime: Datetime[][];
  };
  message: string;
}

export interface GetAllMeetingRes {
  data: {
    meet: MeetBase[];
    datetime: Datetime[];
  };
  message: string;
}

export interface GetMeetDetailRes extends GetAllMeetingRes {
  data: GetAllMeetingRes['data'] & {
    participant: {
      id_receiver: string;
      name: string;
    }[];
  };
}

export interface MeetForCalendar {
  id: number;
  title: string;
  description: string;
  allDay: boolean;
  start: Date;
  end: Date;
  isOnline: number;
  location?: string;
}
