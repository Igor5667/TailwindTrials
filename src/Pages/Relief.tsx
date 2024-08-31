interface ReliefProps {
  className?: string;
}
function Relief({ className }: ReliefProps) {
  return (
    <div
      className={`h-screen w-full text-black flex justify-center items-center ${className}`}
    >
      <div className="w-[200px] h-[200px] rounded-full border-2 border-black" />
    </div>
  );
}

export default Relief;
