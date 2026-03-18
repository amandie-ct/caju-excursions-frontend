import Carousel from './components/Carousel';
import Card from './components/Card';
import { excursionsMock } from './mocks/excursions';

function App() {
  return (
    <main className="grid min-h-screen grid-cols-1 grid-rows-[88px_auto_1fr] bg-slate-100 lg:grid-cols-[280px_1fr] lg:grid-rows-[88px_1fr]">
      <section className="px-6 py-6 lg:px-8 lg:py-8">
        <Carousel>
          {excursionsMock.map((excursion) => (
            <Card key={excursion.id} {...excursion} />
          ))}
        </Carousel>
      </section>
    </main>
  );
}

export default App;
