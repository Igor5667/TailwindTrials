interface CardProps {
  className?: string;
}

function Card({ className }: CardProps) {
  return (
    <div>
      <section
        className={`h-screen bg-emerald-200 flex items-center justify-center ${className}`}
      >
        <p
          className="w-[90%] md:w-[65%] lg:w-1/2 h-1/2 text-center text-3xl flex items-center
         justify-center bg-emerald-300 shadow-lg hover:shadow-emerald-700 transition 
         hover:scale-105 p-2 md:p-8 lg:p-12 overflow-auto"
        >
          Congratulations! 🎉
          <br />
          You won new iphone 17 max pro turbo ultra hd xd lol! <br />
          Everything to get your iphone is give me pic of revers and avers your
          credit card
        </p>
      </section>
    </div>
  );
}

export default Card;
