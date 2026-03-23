import { Navigate, Route, Routes } from 'react-router-dom';
import { ExcursionsContext } from './contexts/excursions-context';
import AppLayout from './layouts/AppLayout';
import { excursionsMock } from './mocks/excursions';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import ManageMyEventsPage from './pages/ManageMyEventsPage';
import NotFoundPage from './pages/NotFoundPage';
import ReimbursementPage from './pages/ReimbursementPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <ExcursionsContext.Provider value={excursionsMock}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="event" element={<EventsPage />} />
          <Route path="event/:id" element={<EventDetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="seat-selection" element={<SeatSelectionPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="reimbursement" element={<ReimbursementPage />} />
          <Route
            path="reimbursment"
            element={<Navigate to="/reimbursement" replace />}
          />
          <Route path="manage-my-events" element={<ManageMyEventsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ExcursionsContext.Provider>
  );
}

export default App;
