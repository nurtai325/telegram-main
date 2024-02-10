import { create } from 'zustand';

export const useStore = create((set) => ({
  logged: false,
  logIn: () => set((state) => ({ logged: true })),
  loading: true,
  setLoading: () => set((state) => ({ loading: false })),
  username: 'Nurtai',
  setUsername: (some) => set((state) => ({ globalEmail: some })),
  chats: [],
  setChats: (some) => set((state) => ({chats: some})),
  messages: {},
  setMessages: (some) => set((state) => ({messages: some})),

}))
