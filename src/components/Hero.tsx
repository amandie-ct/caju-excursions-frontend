import { Clock, Star } from 'lucide-react';
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

      <div className="absolute inset-y-0 left-0 w-[62%] pointer-events-none backdrop-blur-md bg-[linear-gradient(90deg,rgba(255,255,255,0.70  )_0%,rgba(255,255,255,0.45)_55%,rgba(255,255,255,0)_100%)] mask-[linear-gradient(to_right,black_0%,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_70%,transparent_100%)]" />

      <div className="relative w-full max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="max-w-4xl">
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

          <div className="mt-10 grid gap-4 sm:grid-cols-4">
            {tripStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-black bg-white p-5 shadow-[0_4px_0_0_#000]"
              >
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-semibold text-black">
                    {stat.value}
                  </p>
                  {stat.value === '4.9' ? (
                    <Star className="h-6 w-6" fill="gold" strokeWidth={1} />
                  ) : null}
                </div>
                <p className="mt-2 text-xs leading-6 text-gray-700">
                  {stat.label}
                </p>
                <Clock />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
