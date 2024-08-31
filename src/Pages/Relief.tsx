import { useState } from "react";

interface ReliefProps {
  className?: string;
}
function Relief({ className }: ReliefProps) {
  const [isActive, setIsActive] = useState([true, true, true]);
  const [isFormShown, setIsFormShown] = useState(true);
  const [numberOfButtons, setNumberOfButtons] = useState(3);

  const toggleActive = (index: number) => {
    setIsActive((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const addButtons = () => {
    if (numberOfButtons <= 0) return;
    let newArr = [];
    for (let i = 0; i < numberOfButtons; i++) {
      newArr.push(true);
    }
    setIsActive(newArr);
    setIsFormShown(false);
  };

  return (
    <div
      className={`h-screen w-full relative overflow-hidden bg-slate-200 flex justify-center items-center flex-wrap content-center gap-8  ${className}`}
    >
      <div className="absolute top-0 left-1/2 translate-x-[-50%] flex flex-col items-center gap-2  p-4 text-center">
        <h1 className="font-bold text-3xl">Just CLick it</h1>
        {!isFormShown ? (
          <button
            className="submit-button-relief"
            onClick={() => setIsFormShown(true)}
          >
            add buttons
          </button>
        ) : (
          <>
            <h2>How much do you wanna have circles?</h2>
            <input
              value={numberOfButtons}
              onChange={(e) => setNumberOfButtons(+e.target.value)}
              type="number"
              className="concave rounded-3xl p-2 bg-slate-200 focus:outline-none text-center"
            />
            <button className="submit-button-relief" onClick={addButtons}>
              Submit
            </button>
          </>
        )}
      </div>
      {isActive.map((active, index) => (
        <div
          key={index}
          onClick={() => toggleActive(index)}
          className={`${active ? "convex" : "concave"} w-[150px] h-[150px] rounded-full border-2`}
        />
      ))}
    </div>
  );
}
export default Relief;
