import Input from "./Input";
import MessagesContainer from "./MessagesContainer";
import Navbar from "../right/navbar/Navbar";

function Main() {
  return(
    <div className="relative z-5 w-full h-screen flex flex-col items-center float-none">
      <div className="relative z-6 w-full h-screen flex flex-col items-center float-none">
      <Navbar/>
      <MessagesContainer/>
      <Input />
      </div>
    </div>
  );
}

export default Main;