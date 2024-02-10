import { create } from 'zustand';

export const useStore = create((set) => ({
  logged: true,
  logIn: () => set((state) => ({ logged: true })),
  loading: true,
  setLoading: () => set((state) => ({ loading: false })),
  username: 'Nurtai',
  setUsername: (some) => set((state) => ({ globalEmail: some })),
  chats: [],
  setChats: (some) => set((state) => ({chats: some})),
  messages: [
    {text: "Hello world", time:"20:40"},
    {text: "My name is Almas", time:"20:46"}
  ],
  setMessages: (some) => set((state) => ({messages: some})),
  secondUserName: '',
  setSecondUserName: (some) => set((state) => ({secondUserName: some}))
}))


export const useMessages = create((set) => ({
  messages: [
      
    ],

    
  // addingMessage: (chatName, message) => set((state) => ({
  //   messages: [
  //     ...state.messages,
  //     [chatName]: [...state.messages[chatName], message],
      
  //     ]
  // }))
  addingMessage: (message) => set((state) => ({
    messages: [
      ...state.messages, message
    ]
  }))

}));