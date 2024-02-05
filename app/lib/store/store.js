import { create } from 'zustand';
import { chatLinkProps } from '../chatData';

export const useStore = create((set) => ({
  logged: true,
  logIn: () => set((state) => ({ logged: true })),
  filteredList: chatLinkProps,
  setFilteredList: (list) => set((state) => ({ filteredList: list})),
}))
