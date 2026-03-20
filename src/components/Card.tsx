import { HeartIcon } from 'lucide-react';
import type { Excursion } from '@/types/event';

type ExcursionCard = Omit<Excursion, 'description_text' | 'tags'>;

const Card = (props: ExcursionCard) => {
  return (
    <section className="w-88 overflow-hidden bg-white border border-gray-400 rounded-xl">
      <div
        className="h-56 w-full object-contain"
        style={{
          backgroundImage: `url(${props.promo_img})`,
          backgroundSize: 'cover',
          backgroundPosition: ' center',
        }}
      ></div>
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
            <HeartIcon className="h-4 w-4 text-red-500" fill="currentColor" />
            <span>{props.likes}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;
