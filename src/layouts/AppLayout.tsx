import { Outlet } from 'react-router-dom';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AppLayout = () => {
  return (
    <main className="min-h-screen bg-white">
      <Banner text="Don’t miss out on upcoming events. Subscribe today!" />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AppLayout;
