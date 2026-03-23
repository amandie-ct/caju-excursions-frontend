import type { ReactNode } from 'react';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

const PageIntro = ({
  eyebrow,
  title,
  description,
  actions,
}: PageIntroProps) => {
  return (
    <section className="space-y-5">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">
        {eyebrow}
      </p>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            {title}
          </h1>
          <p className="text-lg leading-8 text-slate-600">{description}</p>
        </div>
        {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
};

export default PageIntro;
