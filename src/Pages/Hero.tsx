interface HeroProps {
  className?: string;
}

function Hero({ className }: HeroProps) {
  return (
    <div
      className={`h-screen w-full text-white text-3xl bg-indigo-950 ${className}`}
    >
      Hero
    </div>
  );
}

export default Hero;
