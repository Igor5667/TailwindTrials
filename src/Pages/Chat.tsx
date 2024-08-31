import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import PhoneMenu from "../Components/PhoneMenu";

function Chat() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-screen w-full text-white text-3xl">
      <div className="h-[15%] bg-slate-900  border-b-[1px] border-white flex items-center justify-center">
        <TiThMenu
          className="ml-5 md:hidden"
          onClick={() => setIsMenuOpen(true)}
        />
        <h1 className="text-center mx-auto text-3xl">Chat</h1>
      </div>
      <div className="h-[85%] flex">
        <div
          className="h-full w-[20%] border-e-[1px] border-white bg-slate-800 
        hidden md:block"
        >
          left article
        </div>
        {isMenuOpen && <PhoneMenu setIsMenuOpen={setIsMenuOpen} />}
        <div
          className="h-full md:w-[80%] bg-slate-700 flex flex-col
        w-full"
        >
          <div className="h-full w-full px-11 pt-2">
            <p className="text-right border-2 border-white rounded-full w-min py-2 px-4 ms-auto rounded-se-none drop-shadow-lg shadow-red-600">
              hi
            </p>
            <p className="text-right border-2 border-white rounded-full w-min py-2 px-4 me-auto whitespace-nowrap rounded-ss-none">
              whats up
            </p>
          </div>
          <div className="h-[15%] w-full p-2 ">
            <div className="h-full w-full border-2 border-white rounded-lg">
              form
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
