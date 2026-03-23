import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import PageIntro from '@/components/PageIntro';

const ReimbursementPage = () => {
  return (
    <section className="px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-6xl space-y-10">
        <PageIntro
          eyebrow="Reimbursement"
          title="Request a refund or reimbursement review"
          description="This route is now explicitly available in the flow, and the legacy typo route `/reimbursment` redirects here."
          actions={
            <>
              <Button
                text="Manage my events"
                to="/manage-my-events"
                color="bg-jade"
              />
              <Button
                text="Back to checkout"
                to="/checkout"
                color="bg-amber-500"
              />
            </>
          }
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <form className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
            <label className="block space-y-2">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Reservation code
              </span>
              <input
                type="text"
                placeholder="CAJU-2026-001"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Reason
              </span>
              <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950">
                <option>Trip cancelled</option>
                <option>Schedule conflict</option>
                <option>Duplicate purchase</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Details
              </span>
              <textarea
                rows={5}
                placeholder="Describe the reimbursement request."
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-950"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full border border-b-black bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#000]"
            >
              Submit request
            </button>
          </form>

          <aside className="space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Policy notes</h2>
            <p className="text-sm leading-7 text-slate-600">
              Keep this route focused on support intake. Later you can connect
              it to reservation and payment records.
            </p>
            <p className="text-sm leading-7 text-slate-600">
              If the customer needs more context first, send them to{' '}
              <Link
                to="/manage-my-events"
                className="font-semibold text-brand-600"
              >
                manage my events
              </Link>
              .
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ReimbursementPage;
