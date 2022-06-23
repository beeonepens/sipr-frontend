export interface TeamBase {
  id_team: number;
  name_teams: string;
}

export interface Team extends TeamBase {
  description: string;
  created_at: string;
  updated_at: string;
  team_invite_code: string;
  id_pembuat: string;
}

export interface GetTeamRes {
  data: Team[];
  message: string;
}

export interface GetTeamByMemberRes {
  data: TeamBase[];
  message: string;
}
