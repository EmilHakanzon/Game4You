import { create } from "zustand";
// global state för loading innan api och loading för delay på motions
interface LoadingState {
  isLoaded: boolean; // för delay
  isLoading: boolean; // för har laddats
  setIsLoading: (Loading:boolean) => void;
  setIsLoaded: (loaded: boolean) => void;
}

const useLoadingStore = create<LoadingState>((set) => ({
  isLoaded: false,
  isLoading: false,
  setIsLoading: (loaded) => set({isLoading:loaded}),
  setIsLoaded: (loaded) => set({ isLoaded: loaded }),
}));

export default useLoadingStore;
