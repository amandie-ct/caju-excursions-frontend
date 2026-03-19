import Button from './Button';

const Hero = () => {
  const tripStats = [
    { value: '4.9', label: 'average traveler rating' },
    { value: '24h', label: 'support before departure' },
  ];

  return (
    <section className="relative overflow-hidden border-b border-slate-950/10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/excursion_bus.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,243,232,0.72)_0%,rgba(224,231,215,0.78)_46%,rgba(255,255,255,0.92)_100%)] backdrop-brightness-100" />

      <div className="relative w-full max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="max-w-4xl p-8 shadow-card border rounded-3xl">
          <div className="space-y-5">
            <h1 className="max-w-3xl text-5xl leading-tight text-slate-950 md:text-6xl">
              Plan the next bus escape without chasing schedules in five
              different places.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-800/85">
              Browse curated weekend departures, compare pickup points, and see
              the next available excursions before seats disappear.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              text="Browse schedules"
              href="#schedules"
              color="bg-amber-500"
            />
            <Button
              text="View pickup points"
              href="#schedules"
              color="bg-white"
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {tripStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-950/10 bg-white/70 p-5 backdrop-blur-md"
              >
                <p className="text-3xl font-semibold text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
