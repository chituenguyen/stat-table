import create from 'zustand';

type OpenTeamStore = {
  openTeam: boolean;
  changeOpenTeam: (value: boolean) => void;
};

const useOpenTeamStore = create<OpenTeamStore>((set) => ({
  openTeam: false,
  changeOpenTeam: (value) => set({ openTeam: value }),
}));

export default useOpenTeamStore;
