import { create } from 'zustand'

export const useStore = create((set) => ({
  logged: true,
  logIn: () => set((state) => ({ logged: true })),
}))
