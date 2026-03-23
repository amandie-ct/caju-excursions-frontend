import { Link } from 'react-router-dom';

import PageIntro from '@/components/PageIntro';

const inputClassName =
  'w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-slate-950';

const SignUpPage = () => {
  return (
    <section className="px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,1.1fr)] lg:gap-10">
        <div className="mb-10 rounded-[1.75rem] bg-jade p-8 lg:mb-0">
          <PageIntro
            eyebrow="Sign Up"
            title="Create an account before confirming the reservation"
            description="This route rounds out the authentication branch of the booking flow and connects directly to sign in and checkout."
          />
          <p className="mt-10 text-sm leading-7 text-slate-700">
            Already registered?{' '}
            <Link to="/sign-in" className="font-semibold text-brand-600">
              Open the sign in route
            </Link>
            .
          </p>
        </div>

        <form className="space-y-5">
          <label className="block space-y-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Full name
            </span>
            <input
              type="text"
              placeholder="Your full name"
              className={inputClassName}
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Email
            </span>
            <input
              type="email"
              placeholder="you@example.com"
              className={inputClassName}
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Password
            </span>
            <input
              type="password"
              placeholder="Create a password"
              className={inputClassName}
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full border border-b-black bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#000]"
          >
            Create account
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
