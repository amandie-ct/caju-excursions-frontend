import Button from '@/components/Button';
import PageIntro from '@/components/PageIntro';
import { excursionsMock } from '@/mocks/excursions';

const event = excursionsMock[1];

const CheckoutPage = () => {
  return (
    <section className="px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageIntro
          eyebrow="Checkout"
          title="Confirm payment and finalize the reservation"
          description="The checkout route now has a concrete screen in the app flow instead of being implied by buttons alone."
          actions={
            <>
              <Button text="Back to cart" to="/cart" color="bg-jade" />
              <Button
                text="Need reimbursement?"
                to="/reimbursement"
                color="bg-amber-500"
              />
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <form className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Cardholder
                </span>
                <input
                  type="text"
                  placeholder="Amanda Toledo"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  CPF
                </span>
                <input
                  type="text"
                  placeholder="000.000.000-00"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"
                />
              </label>
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Card number
              </span>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"
              />
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Expiration
                </span>
                <input
                  type="text"
                  placeholder="09/29"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  CVV
                </span>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"
                />
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full border border-b-black bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#000]"
            >
              Confirm payment
            </button>
          </form>

          <aside className="space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Order summary</h2>
            <img
              src={event.promo_img}
              alt={event.title}
              className="h-48 w-full rounded-[1.5rem] object-cover"
            />
            <div>
              <h3 className="text-lg font-bold text-slate-950">
                {event.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {event.date_departure} to {event.date_return}
              </p>
            </div>
            <div className="rounded-3xl bg-white p-5">
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Seats</span>
                <span>12A, 12B</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                <span>Passengers</span>
                <span>2 adults</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-xl font-black text-brand-600">
                <span>Total</span>
                <span>R$ 1.204,70</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
