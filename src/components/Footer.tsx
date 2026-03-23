import { Link } from 'react-router-dom';

import { ArrowRight } from 'lucide-react';
import Button from './Button';

interface FooterLink {
  label: string;
  to: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterLinksProps extends FooterColumn {}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold text-black">{title}</h2>
      <ul className="space-y-4 text-md text-slate-900/85">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} className="transition hover:bg-stone-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const footerColumns: FooterColumn[] = [
    {
      title: 'Events',
      links: [
        { label: 'All departures', to: '/event' },
        { label: 'Seat selection', to: '/seat-selection' },
        { label: 'Cart', to: '/cart' },
        { label: 'Checkout', to: '/checkout' },
      ],
    },
    {
      title: 'Account',
      links: [
        { label: 'Sign in', to: '/sign-in' },
        { label: 'Sign up', to: '/sign-up' },
        { label: 'Manage my events', to: '/manage-my-events' },
        { label: 'Reimbursement', to: '/reimbursement' },
      ],
    },
    {
      title: 'Planning',
      links: [
        { label: 'Home', to: '/' },
        { label: 'Featured event', to: '/event/event-1' },
        { label: 'Upcoming trips', to: '/manage-my-events' },
        { label: 'Payment review', to: '/checkout' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Caju', to: '/' },
        { label: 'Support hub', to: '/reimbursement' },
        { label: 'Book a new trip', to: '/event' },
        { label: 'Customer area', to: '/sign-in' },
      ],
    },
  ];

  return (
    <footer className="mt-24 border-t border-slate-950/15 bg-jade text-slate-950">
      <section className="px-6 py-14 lg:px-10 lg:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {footerColumns.map((column) => (
              <FooterLinks key={column.title} {...column} />
            ))}
          </div>

          <aside className="space-y-6 border-t border-slate-950/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <img src="/assets/caju_excursions.png" width={120} />
            <p className="max-w-xs text-md leading-8 text-slate-900/85">
              Weekly excursion schedules, confirmed pickup times, and curated
              departures for travelers who want an easier weekend escape.
            </p>
            <Button
              text="See next departures"
              to="/event"
              color="bg-amber-500"
              className="text-base"
              icon={<ArrowRight />}
            />
          </aside>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
