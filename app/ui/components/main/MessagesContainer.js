import DisplayComponent from "./Message";

function MessagesContainer() {
  return(
    <div className="w-full h-screen relative flex justify-center">
      <div className="w-[694px] h-full">
        <DisplayComponent message="Hello world"/>
      </div>
    </div>
  );
}

export default MessagesContainer;