import create from 'zustand';

interface MiniSidebarState {
  isMini: boolean;
  toggleMini: () => void;
  toggleFullSize: () => void;
}

const useMiniSidebar = create<MiniSidebarState>((set) => ({
  isMini: false,
  toggleMini: () => set({ isMini: true }),
  toggleFullSize: () => set({ isMini: false }),
}));

export default useMiniSidebar;
