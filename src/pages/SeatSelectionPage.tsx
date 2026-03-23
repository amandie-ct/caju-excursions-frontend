import Button from '@/components/Button';
import PageIntro from '@/components/PageIntro';

const seats = [
  '01A',
  '01B',
  '02A',
  '02B',
  '03A',
  '03B',
  '04A',
  '04B',
  '05A',
  '05B',
  '06A',
  '06B',
  '07A',
  '07B',
  '08A',
  '08B',
];

const occupiedSeats = new Set(['02B', '04A', '06B']);
const selectedSeats = new Set(['01A', '01B']);

const SeatSelectionPage = () => {
  return (
    <section className="px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <PageIntro
          eyebrow="Seat Selection"
          title="Pick seats before finalizing the trip"
          description="This route marks the mid-funnel step between choosing an event and confirming payment."
          actions={
            <>
              <Button text="Back to cart" to="/cart" color="bg-jade" />
              <Button
                text="Continue to checkout"
                to="/checkout"
                color="bg-amber-500"
              />
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
            <div className="mx-auto mb-8 flex h-14 max-w-md items-center justify-center rounded-full bg-slate-950 text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Driver
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {seats.map((seat) => {
                const isOccupied = occupiedSeats.has(seat);
                const isSelected = selectedSeats.has(seat);

                const stateClassName = isOccupied
                  ? 'border-slate-200 bg-slate-100 text-slate-400'
                  : isSelected
                    ? 'border-brand-600 bg-brand-600 text-white'
                    : 'border-slate-300 bg-white text-slate-900 hover:border-slate-950';

                return (
                  <button
                    key={seat}
                    type="button"
                    disabled={isOccupied}
                    className={`rounded-2xl border px-4 py-5 text-base font-bold transition ${stateClassName}`}
                  >
                    {seat}
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Seat legend</h2>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-brand-600" />
                <span>Selected seats</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-white ring-1 ring-slate-300" />
                <span>Available seats</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-4 w-4 rounded-full bg-slate-300" />
                <span>Unavailable seats</span>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
                Current selection
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-950">
                01A, 01B
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                The UI is route-complete; you can attach real selection state
                later without changing URLs.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SeatSelectionPage;
