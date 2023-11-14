// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  list: [],
  setList: (text) =>
    set((prev) => {
      // 중복 체크
      if (!prev.list.includes(text)) {
        return {
          list: [...prev.list, text],
        };
      }
      return { list: prev.list };
    }),
}));

export default useStore;
