import Button from '@/components/Button';
import PageIntro from '@/components/PageIntro';

const NotFoundPage = () => {
  return (
    <section className="px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-card">
        <PageIntro
          eyebrow="404"
          title="This route does not exist"
          description="The router is active, but the requested URL is not mapped to a page in this frontend."
          actions={<Button text="Back home" to="/" color="bg-jade" />}
        />
      </div>
    </section>
  );
};

export default NotFoundPage;
