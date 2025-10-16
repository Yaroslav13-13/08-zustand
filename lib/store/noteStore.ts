import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Draft = {
  title: string;
  content: string;
  tag: string;
};

const initialDraft: Draft = {
  title: "",
  content: "",
  tag: "Todo",
};

type NoteStore = {
  draft: Draft;
  setDraft: (partial: Partial<Draft>) => void;
  clearDraft: () => void;
};

export const useNoteStore = create<NoteStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (partial) =>
        set((state) => ({ draft: { ...state.draft, ...partial } })),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: "notehub-note-store-v1",
      storage: createJSONStorage(() => {
        if (typeof window === "undefined") {
          // SSR fallback
          return {
            getItem: (_: string): null => null,
            setItem: (_: string, __: string): void => {},
            removeItem: (_: string): void => {},
          } as Storage;
        }
        return localStorage;
      }),
    }
  )
);

export { initialDraft };
