import create from 'zustand';

interface UnreleasedState {
  openModal: boolean;
  setOpenModal: (op: boolean) => void;
}

export const useUnreleased = create<UnreleasedState>((set) => ({
  openModal: false,
  setOpenModal: (op) => set({ openModal: op }),
}));
