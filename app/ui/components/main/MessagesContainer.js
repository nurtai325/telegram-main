import DisplayComponent from "./Message";
import { useMessages } from "@/app/lib/store/store";


function MessagesContainer() {
  const messages = useMessages((state) => state.messages["AlmasChat"]);

  return(
    <div className="w-full h-screen flex justify-center">
      <div className="w-[694px] max-w-[694px] relative h-full flex flex-1 flex-col justify-end overflow-y-scroll">
      {messages.map((message, index) => (
          <DisplayComponent key={index} message={message[0]} date={message[1] } />
        ))}

        
      </div>
    </div>
  );
}

export default MessagesContainer;

