import create from 'zustand';

interface SidebarState {
  isMini: boolean;
  color: string;
  toggleMini: () => void;
  toggleFullSize: () => void;
  setColor: (c: string) => void;
}

const useSidebar = create<SidebarState>((set) => ({
  isMini: false,
  color: 'dark',
  toggleMini: () => set({ isMini: true }),
  toggleFullSize: () => set({ isMini: false }),
  setColor: (c: string) => set({ color: c }),
}));

export default useSidebar;
