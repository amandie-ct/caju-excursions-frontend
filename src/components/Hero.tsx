const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/assets/excursion_bus.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'right',
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.48)_45%,rgba(0,0,0,0.6)_100%)] backdrop-blur-[1px]" />
      <div className="relative w-full max-w-8xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="max-w-4xl">
          <h1 className="max-w-3xl text-7 xl leading-tight font-extrabold text-white md:text-6xl">
            It's the journey, <span className="line-through">not</span> and the
            destination.
          </h1>
          <p className="text-gray-200 mt-6 text-xl">
            Book your weekend trip now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
