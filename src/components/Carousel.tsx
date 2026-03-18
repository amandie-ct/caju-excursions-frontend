import type { ReactNode } from 'react';

type CarouselProps = { children: ReactNode };

const Carousel = ({ children }: CarouselProps) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
      {children}
    </section>
  );
};

export default Carousel;
