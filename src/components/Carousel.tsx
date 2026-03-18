import { useState, useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card';

import { ExcursionsContext } from '../contexts/excursions-context';

const SLIDE_WIDTH_REM = 22;
const SLIDE_GAP_REM = 1;

const Carousel = () => {
  const excursions = useContext(ExcursionsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalExcursions = excursions?.length ?? 0;
  const translateX = `calc(-${currentIndex} * (${SLIDE_WIDTH_REM}rem + ${SLIDE_GAP_REM}rem))`;

  const handlePrevious = () => {
    if (totalExcursions === 0) return;

    let previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
      previousIndex = totalExcursions - 1;
    }
    setCurrentIndex(previousIndex);
  };

  const handleNext = () => {
    if (totalExcursions === 0) return;

    let nextIndex = currentIndex + 1;
    if (nextIndex >= totalExcursions) {
      nextIndex = 0;
    }
    setCurrentIndex(nextIndex);
  };
  return (
    <section className=" max-w-7xl mt-20 mx-auto">
      <h1 className="my-4 text-2xl text-black">Next Events</h1>
      <section className="mx-auto flex max-w-7xl items-center gap-2">
        <div className="flex h-20 items-center">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={handlePrevious}
            disabled={totalExcursions === 0}
          >
            <ChevronLeft size={60} />
          </button>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <div
            className="flex w-max gap-4 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${translateX})` }}
          >
            {excursions?.map((excursion, index) => (
              <div
                key={excursion.id}
                className={`shrink-0 transition-all duration-300 ${
                  index === currentIndex ? 'scale-100' : 'scale-90'
                }`}
              >
                <Card {...excursion} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-20 items-center">
          <button
            type="button"
            aria-label="Next slide"
            onClick={handleNext}
            disabled={totalExcursions === 0}
          >
            <ChevronRight size={60} />
          </button>
        </div>
      </section>
    </section>
  );
};

export default Carousel;
