import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { ExcursionsContext } from './contexts/excursions-context';
import { excursionsMock } from './mocks/excursions';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Banner text="Don’t miss out on upcoming events. Subscribe today!" />
      <Navbar />
      <Hero />
      <section className="px-6 py-6 ">
        <ExcursionsContext.Provider value={excursionsMock}>
          <Carousel />
        </ExcursionsContext.Provider>
      </section>
      <Footer />
    </main>
  );
}

export default App;
