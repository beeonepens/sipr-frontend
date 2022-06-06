import create from 'zustand';

interface IAgendaTableFilter {
  order: 'asc' | 'desc';
  setOrder: (s: IAgendaTableFilter['order']) => void;
  sortBy: 'meet_name' | 'start_time';
  setSortBy: (s: IAgendaTableFilter['sortBy']) => void;
}

export const useAgendaTableFilter = create<IAgendaTableFilter>((set) => ({
  order: 'asc',
  sortBy: 'start_time',

  setOrder: (order) => set({ order }),
  setSortBy: (sort) => set({ sortBy: sort }),
}));
