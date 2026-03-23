import { CalendarClock, CreditCard, Ticket, UserRound } from 'lucide-react';

import Button from '@/components/Button';
import Carousel from '@/components/Carousel';
import Hero from '@/components/Hero';
import PageIntro from '@/components/PageIntro';

const quickLinks = [
  {
    title: 'Browse all events',
    description:
      'See the complete departures list before you commit to a trip.',
    to: '/event',
    icon: <Ticket className="h-5 w-5" />,
  },
  {
    title: 'Manage my events',
    description:
      'Review upcoming reservations, payment status, and support options.',
    to: '/manage-my-events',
    icon: <CalendarClock className="h-5 w-5" />,
  },
  {
    title: 'Open cart',
    description:
      'Check the booking summary and confirm what is ready for checkout.',
    to: '/cart',
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    title: 'Access account',
    description: 'Sign in or create an account to continue booking your seats.',
    to: '/sign-in',
    icon: <UserRound className="h-5 w-5" />,
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />

      <section id="schedules" className="px-6 py-8 lg:px-10">
        <Carousel />
      </section>

      <section className="px-6 py-10 lg:px-10 lg:py-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-8 shadow-card lg:px-10">
          <PageIntro
            eyebrow="Quick Access"
            title="Route-ready pages for the booking flow"
            description="The homepage now links into the rest of the app flow so the new routes are reachable without typing URLs manually."
            actions={
              <Button text="Start with events" to="/event" color="bg-jade" />
            }
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map((link) => (
              <article
                key={link.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-full bg-brand-50 p-3 text-brand-600">
                  {link.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-950">
                  {link.title}
                </h2>
                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">
                  {link.description}
                </p>
                <Button
                  text="Open page"
                  to={link.to}
                  color="bg-amber-500"
                  className="mt-4"
                />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
