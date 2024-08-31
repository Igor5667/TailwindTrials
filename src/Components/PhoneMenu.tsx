import { FaArrowLeft } from "react-icons/fa";

interface PropsPhoneMenu {
  setIsMenuOpen: (value: boolean) => void;
}

function PhoneMenu({ setIsMenuOpen }: PropsPhoneMenu) {
  return (
    <div
      className={`absolute h-screen w-[80%]  top-[100vh] left-0 md:hidden flex justify-between px-4 pt-7 z-10
                  background-glass  `}
    >
      {/* top-100vh only when on top is one page 
                else top-0 */}
      <h2 className="h-min text-3xl">PHONE MENU</h2>
      <div className="h-min flex justify-center items-center">
        <FaArrowLeft onClick={() => setIsMenuOpen(false)} />
      </div>
    </div>
  );
}

export default PhoneMenu;
