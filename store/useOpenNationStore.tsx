import {create} from 'zustand';

type OpenNationStore = {
  openNation: boolean;
  changeOpennation: (value: boolean) => void;
};

const useOpenNationStore = create<OpenNationStore>((set) => ({
  openNation: false,
  changeOpennation: (value) => set({ openNation: value }),
}));

export default useOpenNationStore;
