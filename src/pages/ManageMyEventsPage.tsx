import Button from '@/components/Button';
import PageIntro from '@/components/PageIntro';
import { excursionsMock } from '@/mocks/excursions';

const bookings = excursionsMock.slice(0, 3).map((event, index) => ({
  ...event,
  status:
    index === 0
      ? 'Confirmed'
      : index === 1
        ? 'Pending payment'
        : 'Refund requested',
}));

const ManageMyEventsPage = () => {
  return (
    <section className="px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageIntro
          eyebrow="Manage My Events"
          title="Review active bookings from one route"
          description="This page gives the app a dedicated post-purchase surface for status tracking, actions, and support entry points."
          actions={
            <>
              <Button text="Book another event" to="/event" color="bg-jade" />
              <Button
                text="Need reimbursement?"
                to="/reimbursement"
                color="bg-amber-500"
              />
            </>
          }
        />

        <div className="space-y-5">
          {bookings.map((booking) => (
            <article
              key={booking.id}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-slate-950">
                      {booking.title}
                    </h2>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-600">
                      {booking.status}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">
                    {booking.destination_city} · {booking.date_departure} to{' '}
                    {booking.date_return}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    text="View event"
                    to={`/event/${booking.id}`}
                    color="bg-white"
                  />
                  <Button
                    text="Open reimbursement"
                    to="/reimbursement"
                    color="bg-jade"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManageMyEventsPage;
