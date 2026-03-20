import { useContext, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card';

import { ExcursionsContext } from '../contexts/excursions-context';

const SLIDE_WIDTH_REM = 22;
const SLIDE_GAP_REM = 1;

const Carousel = () => {
  const excursions = useContext(ExcursionsContext);
  const totalExcursions = excursions?.length ?? 0;
  const [currentIndex, setCurrentIndex] = useState(totalExcursions > 0 ? 1 : 0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const loopedExcursions =
    totalExcursions > 1 && excursions
      ? [excursions[totalExcursions - 1], ...excursions, excursions[0]]
      : (excursions ?? []);
  const activeIndex =
    totalExcursions > 0
      ? (currentIndex - 1 + totalExcursions) % totalExcursions
      : 0;
  const translateX = `calc(-${currentIndex} * (${SLIDE_WIDTH_REM}rem + ${SLIDE_GAP_REM}rem))`;

  useEffect(() => {
    setCurrentIndex(totalExcursions > 1 ? 1 : 0);
    setIsTransitionEnabled(false);
  }, [totalExcursions]);

  const handlePrevious = () => {
    if (totalExcursions <= 1) return;

    setIsTransitionEnabled(true);
    setCurrentIndex((previousIndex) => previousIndex - 1);
  };

  const handleNext = () => {
    if (totalExcursions <= 1) return;

    setIsTransitionEnabled(true);
    setCurrentIndex((nextIndex) => nextIndex + 1);
  };

  const handleTransitionEnd = () => {
    if (totalExcursions <= 1) return;

    if (currentIndex === 0) {
      setIsTransitionEnabled(false);
      setCurrentIndex(totalExcursions);
    }

    if (currentIndex === totalExcursions + 1) {
      setIsTransitionEnabled(false);
      setCurrentIndex(1);
    }
  };

  return (
    <section className=" max-w-7xl mt-20 mx-auto">
      <h1 className="my-4 text-2xl text-black text-bold">Upcoming events</h1>
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
            className={`flex w-max gap-4 ${
              isTransitionEnabled
                ? 'transition-transform duration-500 ease-out'
                : 'transition-none'
            }`}
            style={{ transform: `translateX(${translateX})` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedExcursions.map((excursion, index) => (
              <div
                key={`${excursion.id}-${index}`}
                className={`shrink-0 transition-all duration-300 ${
                  totalExcursions > 0 &&
                  (index - 1 + totalExcursions) % totalExcursions ===
                    activeIndex
                    ? 'scale-100 hover:-translate-y-2'
                    : 'scale-90'
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
