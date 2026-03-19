import { ArrowRight } from 'lucide-react';
import Button from './Button';

interface FooterColumn {
  title: string;
  links: string[];
}

interface FooterLinksProps extends FooterColumn {}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold text-black">{title}</h2>
      <ul className="space-y-4 text-md text-slate-900/85">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:bg-stone-300  transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const footerColumns: FooterColumn[] = [
    {
      title: 'Schedules',
      links: [
        'Weekend routes',
        'Holiday departures',
        'Popular destinations',
        'Last-minute seats',
      ],
    },
    {
      title: 'Planning',
      links: [
        'Pickup locations',
        'Trip checklist',
        'Payment options',
        'Cancellation policy',
      ],
    },
    {
      title: 'Travelers',
      links: [
        'Group reservations',
        'Travel updates',
        'Frequently asked questions',
        'Customer support',
      ],
    },
    {
      title: 'Company',
      links: [
        'About Caju',
        'Partner inquiries',
        'Work with us',
        'Contact team',
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
            <p className="font-kavoon text-xl leading-none">Caju Excursions</p>
            <p className="max-w-xs text-md leading-8 text-slate-900/85">
              Weekly excursion schedules, confirmed pickup times, and curated
              departures for travelers who want an easier weekend escape.
            </p>
            <Button
              text="See next departures"
              href="#"
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
