import DisplayComponent from "./Message";
import { useMessages } from "@/app/lib/store/store";


function MessagesContainer() {
  const messages = useMessages((state) => state.messages);



  return(
    <div className="w-full h-screen flex justify-center overflow-y-auto">
      <div className="w-[694px] max-w-[694px] h-[full]  flex flex-col-reverse overflow-y-scroll">
      {messages.slice().reverse().map((message, index) => (
          <DisplayComponent key={index} text={message.text} time={message.time } />
        ))}


      </div>
    </div>
  );
}

export default MessagesContainer;



