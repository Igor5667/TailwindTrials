import { FaArrowLeft } from "react-icons/fa";

interface PropsPhoneMenu {
  setIsMenuOpen: (value: boolean) => void;
}

function PhoneMenu({ setIsMenuOpen }: PropsPhoneMenu) {
  return (
    <div
      className={`absolute h-screen w-[80%] md:hidden flex justify-between px-4 pt-7 z-10
                  background-glass  `}
    >
      <h2 className="h-min text-3xl">PHONE MENU</h2>
      <div className="h-min flex justify-center items-center">
        <FaArrowLeft onClick={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
}

export default PhoneMenu;
