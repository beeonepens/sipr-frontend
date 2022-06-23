import create from 'zustand';

interface IParticipant {
  name: string;
  id: string;
  team?: boolean;
}

interface MeetingParticipantStore {
  personParticipants: IParticipant[];
  teamParticipants: IParticipant[];
  addPersonParticipant: (person: IParticipant) => void;
  removePersonParticipant: (person: IParticipant) => void;
  resetPersonParticipant: () => void;
  addTeamParticipant: (team: IParticipant) => void;
  removeTeamParticipant: (team: IParticipant) => void;
  resetTeamParticipant: () => void;
}

export const useParticipantStore = create<MeetingParticipantStore>((set) => ({
  personParticipants: [],
  teamParticipants: [],
  addPersonParticipant: (person) =>
    set(({ personParticipants }) => ({
      personParticipants: [...personParticipants, person],
    })),
  removePersonParticipant: (person) =>
    set(({ personParticipants }) => ({
      personParticipants: personParticipants.filter((p) => p.id !== person.id),
    })),
  resetPersonParticipant: () => set({ personParticipants: [] }),
  addTeamParticipant: (team) =>
    set(({ teamParticipants }) => ({
      teamParticipants: [...teamParticipants, team],
    })),
  removeTeamParticipant: (team) =>
    set(({ teamParticipants }) => ({
      teamParticipants: teamParticipants.filter((t) => t.id !== team.id),
    })),
  resetTeamParticipant: () => set({ teamParticipants: [] }),
}));
