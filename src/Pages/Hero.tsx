interface HeroProps {
  className?: string;
}

function Hero({ className }: HeroProps) {
  return (
    <section
      className={`h-screen w-full relative bg-gradient-to-tr from-[#1c2241] to-[#2e0469] text-white ${className} -z-20`}
    >
      <div className="">
        <img
          src="heroImage.jpg"
          alt="programmin"
          className="absolute right-0 top-0 h-full object-cover overflow-hidden blur-[2px] opacity-40 -z-10"
        />
      </div>
      <div className="flex flex-col justify-center items-center h-full text-center lg:absolute lg:mt-20 lg:left-16">
        <h1
          className=" font-bold tracking-tighter p-4 bg-gradient-to-r from-[#80fbfd] to-[#d718e9] bg-clip-text text-transparent
         text-5xl md:text-7xl lg:text-8xl"
        >
          Hi, this is training site
        </h1>
        <div className="md:ps-10 text-xl">
          <p className=" font-semibold">
            Created by <i className="font-extralight ms-1 mt-5">IGOR DLUGON</i>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
