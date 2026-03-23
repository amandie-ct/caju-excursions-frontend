import { useContext } from 'react';

import Button from '@/components/Button';
import Card from '@/components/Card';
import PageIntro from '@/components/PageIntro';
import { ExcursionsContext } from '@/contexts/excursions-context';

const EventsPage = () => {
  const excursions = useContext(ExcursionsContext) ?? [];

  return (
    <section className="px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl space-y-10">
        <PageIntro
          eyebrow="All Events"
          title="Choose the next departure that fits your weekend"
          description="This route centralizes every excursion in a scannable grid and connects directly to each event detail page."
          actions={
            <>
              <Button text="View cart" to="/cart" color="bg-jade" />
              <Button
                text="Manage my events"
                to="/manage-my-events"
                color="bg-amber-500"
              />
            </>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {excursions.map((excursion) => (
            <Card
              key={excursion.id}
              {...excursion}
              to={`/event/${excursion.id}`}
              className="h-full shadow-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
