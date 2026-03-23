import { CalendarDays, MapPin, Ticket, Users } from 'lucide-react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from '@/components/Button';
import PageIntro from '@/components/PageIntro';
import { ExcursionsContext } from '@/contexts/excursions-context';

const EventDetailPage = () => {
  const { id } = useParams();
  const excursions = useContext(ExcursionsContext) ?? [];
  const excursion = excursions.find((item) => item.id === id);

  if (!excursion) {
    return (
      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
          <PageIntro
            eyebrow="Event Missing"
            title="This event could not be found"
            description="The route is working, but the event id does not match the current excursion catalog."
            actions={
              <Button text="Back to events" to="/event" color="bg-jade" />
            }
          />
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageIntro
          eyebrow="Event Detail"
          title={excursion.title}
          description={excursion.description_text}
          actions={
            <>
              <Button
                text="Choose seats"
                to={`/seat-selection?event=${excursion.id}`}
                color="bg-jade"
              />
              <Button
                text="Go to checkout"
                to="/checkout"
                color="bg-amber-500"
              />
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)]">
          <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
            <div
              className="h-96 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${excursion.promo_img})` }}
            />
            <div className="space-y-6 p-8">
              <div className="flex flex-wrap gap-3">
                {excursion.tags.split(', ').map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <div className="mb-3 flex items-center gap-3 text-slate-500">
                    <CalendarDays className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                      Dates
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-slate-950">
                    {excursion.date_departure} to {excursion.date_return}
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <div className="mb-3 flex items-center gap-3 text-slate-500">
                    <MapPin className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                      Destination
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-slate-950">
                    {excursion.destination_city}
                  </p>
                </div>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
                Booking Snapshot
              </p>
              <p className="mt-5 text-4xl font-black">{excursion.price}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Reserve seats, hold your spot, and move directly into checkout
                from this route.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-white/8 px-4 py-3">
                  <span className="flex items-center gap-2 text-sm text-slate-200">
                    <Users className="h-4 w-4" />
                    Likes
                  </span>
                  <span className="font-semibold">{excursion.likes}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/8 px-4 py-3">
                  <span className="flex items-center gap-2 text-sm text-slate-200">
                    <Ticket className="h-4 w-4" />
                    Route ID
                  </span>
                  <span className="font-semibold">{excursion.id}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  text="Add to cart"
                  to="/cart"
                  color="bg-amber-500"
                  className="text-slate-950"
                />
                <Button text="Manage bookings" to="/manage-my-events" />
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
                Next Step
              </p>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Continue to{' '}
                <Link
                  to="/seat-selection"
                  className="font-semibold text-brand-600"
                >
                  seat selection
                </Link>{' '}
                or jump into{' '}
                <Link to="/checkout" className="font-semibold text-brand-600">
                  checkout
                </Link>{' '}
                if the reservation is already defined.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default EventDetailPage;
