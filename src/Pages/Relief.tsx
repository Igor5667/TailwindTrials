import { useState } from "react";

interface ReliefProps {
  className?: string;
}
function Relief({ className }: ReliefProps) {
  const [isActive, setIsActive] = useState([true, true, true]);

  const toggleActive = (index: number) => {
    setIsActive((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div
      className={`h-screen w-full bg-slate-200 flex justify-center items-center gap-8 flex-wrap ${className}`}
    >
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
