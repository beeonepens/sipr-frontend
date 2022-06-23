export interface TeamBase {
  id_team: number;
  name_teams: string;
  description: string;
}

export interface Team extends TeamBase {
  created_at: string;
  updated_at: string;
  team_invite_code: string;
  id_pembuat: string;
}

export interface TeamWithMember {
  id_team: number;
  name_team: string;
  description: string;
  member: number;
}

export interface GetTeamRes {
  data: Team[];
  message: string;
}

export interface GetTeamByMemberRes {
  data: TeamWithMember[];
  message: string;
}

export interface NewTeamResponse {
  data: Team[];
  message: string;
}

export interface JoinTeam {
  id_team: number;
  id_member: string;
  updated_at: string;
  created_at: string;
  id: number;
}
export interface JoinTeamRes {
  data: JoinTeam;
  message: string;
}
