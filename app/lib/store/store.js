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


export const useMessages = create((set) => ({
  messages: {
    "AlmasChat": [
      ["Hello world", "20:40"],
      ["My name is Almas", "20:46"]
    ]
  },

  // addingMessage: (chatName, message) => set((state) => ({
  //   messages: [
  //     ...state.messages,
  //     [chatName]: [...state.messages[chatName], message],
      
  //     ]
  // }))
  addingMessage: (chatName, message) => set((state) => ({
    messages: {
      ...state.messages,
      [chatName]: [...state.messages[chatName], message]
    }
  }))

}));