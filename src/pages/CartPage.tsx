import Button from '@/components/Button';
import PageIntro from '@/components/PageIntro';
import { excursionsMock } from '@/mocks/excursions';

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const parsePrice = (price: string) =>
  Number(price.replace('R$', '').replace(/\./g, '').replace(',', '.').trim());

const CartPage = () => {
  const cartItems = excursionsMock.slice(0, 2);
  const total = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price),
    0,
  );

  return (
    <section className="px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageIntro
          eyebrow="Cart"
          title="Review the excursions ready for checkout"
          description="This route gives the booking flow a stable stop between event selection and payment confirmation."
          actions={
            <>
              <Button text="Browse more events" to="/event" color="bg-jade" />
              <Button
                text="Go to checkout"
                to="/checkout"
                color="bg-amber-500"
              />
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="space-y-5">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:flex-row"
              >
                <img
                  src={item.promo_img}
                  alt={item.title}
                  className="h-40 w-full rounded-[1.5rem] object-cover md:w-52"
                />
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-950">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.destination_city}
                      </p>
                    </div>
                    <p className="text-xl font-black text-brand-600">
                      {item.price}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">
                    {item.description_text}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      text="Edit seats"
                      to={`/seat-selection?event=${item.id}`}
                      color="bg-jade"
                    />
                    <Button
                      text="View event"
                      to={`/event/${item.id}`}
                      color="bg-white"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-300">
              Summary
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between text-slate-300">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Service fee</span>
                <span>{currencyFormatter.format(24.9)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xl font-bold text-white">
                <span>Total</span>
                <span>{currencyFormatter.format(total + 24.9)}</span>
              </div>
            </div>

            <Button
              text="Proceed to checkout"
              to="/checkout"
              color="bg-amber-500"
              className="mt-8 text-slate-950"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
