import { useContext, useEffect, useRef, useState } from 'react';

import Card from './Card';

import { ExcursionsContext } from '../contexts/excursions-context';

const SLIDE_WIDTH_PX = 352;
const SLIDE_GAP_PX = 16;
const SLIDE_SPAN_PX = SLIDE_WIDTH_PX + SLIDE_GAP_PX;
const AUTO_SCROLL_SPEED_PX_PER_MS = 0.045;

const Carousel = () => {
  const excursions = useContext(ExcursionsContext);
  const totalExcursions = excursions?.length ?? 0;
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const marqueeExcursions = excursions
    ? [...excursions, ...excursions, ...excursions]
    : [];

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const updateViewportWidth = () => {
      setViewportWidth(viewport.clientWidth);
    };

    updateViewportWidth();

    const resizeObserver = new ResizeObserver(updateViewportWidth);
    resizeObserver.observe(viewport);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || totalExcursions === 0 || viewportWidth === 0) return;

    const loopWidth = totalExcursions * SLIDE_SPAN_PX;
    const centeredStartOffset =
      loopWidth + SLIDE_WIDTH_PX / 2 - viewportWidth / 2;
    const loopEndOffset = centeredStartOffset + loopWidth;
    let offset = centeredStartOffset;
    let previousTime = 0;
    let animationFrameId = 0;
    let lastActiveIndex = -1;

    const animate = (time: number) => {
      if (previousTime === 0) {
        previousTime = time;
      }

      const deltaTime = time - previousTime;
      previousTime = time;
      offset += deltaTime * AUTO_SCROLL_SPEED_PX_PER_MS;

      if (offset >= loopEndOffset) {
        offset -= loopWidth;
      }

      track.style.transform = `translateX(-${offset}px)`;

      const centerPosition = offset + viewportWidth / 2;
      const closestSlideIndex = Math.round(
        (centerPosition - SLIDE_WIDTH_PX / 2) / SLIDE_SPAN_PX,
      );
      const nextActiveIndex =
        ((closestSlideIndex % totalExcursions) + totalExcursions) %
        totalExcursions;

      if (nextActiveIndex !== lastActiveIndex) {
        lastActiveIndex = nextActiveIndex;
        setActiveIndex(nextActiveIndex);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    track.style.transform = `translateX(-${centeredStartOffset}px)`;
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [totalExcursions, viewportWidth]);

  return (
    <section className="mx-auto mt-20 max-w-7xl">
      <h1 className="my-10 text-4xl font-bold text-black">Upcoming events</h1>

      <section className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

        <div ref={viewportRef} className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max gap-4 py-4 will-change-transform"
          >
            {marqueeExcursions.map((excursion, index) => {
              const logicalIndex =
                totalExcursions > 0 ? index % totalExcursions : 0;
              const isActive = logicalIndex === activeIndex;

              return (
                <div
                  key={`${excursion.id}-${index}`}
                  className={`shrink-0 transition-all duration-300 ${
                    isActive ? 'scale-100 -translate-y-1' : 'scale-90'
                  }`}
                >
                  <Card
                    {...excursion}
                    to={`/event/${excursion.id}`}
                    className={isActive ? 'shadow-[0_8px_0_0_#000]' : ''}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Carousel;
