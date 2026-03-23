import { HeartIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Excursion } from '@/types/event';

type ExcursionCard = Omit<Excursion, 'description_text' | 'tags'> & {
  className?: string;
  to?: string;
};

const Card = ({ className = '', to, ...props }: ExcursionCard) => {
  const content = (
    <section
      className={`h-110 w-80 overflow-hidden rounded-md border border-gray-100 bg-white shadow-2xl ${className}`}
    >
      <div className="px-4 pt-6">
        <div
          className="h-56 w-full object-contain"
          style={{
            backgroundImage: `url(${props.promo_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-slate-950">
            {props.title}
          </h2>
          <p className="text-sm text-slate-400">
            {props.date_departure} - {props.date_return}
          </p>
        </div>
        <p className="text-sm text-slate-600">{props.destination_city}</p>
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-brand-900">
            {props.price}
          </p>
          <p className="flex items-center gap-1 text-sm text-slate-500">
            <HeartIcon className="h-4 w-4 text-black" fill="red" />
            <span>{props.likes}</span>
          </p>
        </div>
      </div>
    </section>
  );

  if (to) {
    return (
      <Link
        to={to}
        className="block transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;
