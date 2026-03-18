import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import { ExcursionsContext } from './contexts/excursions-context';
import { excursionsMock } from './mocks/excursions';

function App() {
  return (
    <main className="min-h-screen bg-jade lg:grid-rows-[88px_1fr]">
      <Banner text="Don’t miss out on upcoming events. Subscribe today!" />
      <Navbar />
      <section className="px-6 py-6 lg:px-8 lg:py-8">
        <ExcursionsContext.Provider value={excursionsMock}>
          <Carousel />
        </ExcursionsContext.Provider>
      </section>
    </main>
  );
}

export default App;
