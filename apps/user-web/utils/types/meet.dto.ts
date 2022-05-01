export interface Datetime {
  id_meet: number;
  start_datetime: string;
  end_datetime: string;
}

export interface Meet {
  id_meet: number;
  name_meeting: string;
  description: string;
  isOnline: number;
  created_at: string;
  updated_at: string;
  room_id: number;
  user_id: string;
}

export interface MeetWithDate extends Meet, Datetime {}

export interface NewMeetingResponse {
  data: {
    meet: Meet[];
    datetime: Datetime[];
  };
  message: string;
}

export interface GetAllMeetingRes {
  data: {
    meet: Meet[];
    datetime: Datetime[];
  };
  message: string;
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
