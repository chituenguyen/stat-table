import {create} from 'zustand';

const useOpenTeamStore = create((set) => ({
  openTeam: false,
  changeOpenTeam: (value) => set({ openTeam: value }),
}));

export default useOpenTeamStore;
