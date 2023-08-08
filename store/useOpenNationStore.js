import {create} from 'zustand';

const useOpenNationStore = create((set) => ({
  openNation: false,
  changeOpennation: (value) => set({ openNation: value }),
}));

export default useOpenNationStore;
