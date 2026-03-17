import type { SeatReservation } from './reservation';
import type { CreditCardPaymentMethod } from './payment';
import type { EventPurchase } from './event';

export interface Address {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  complement?: string;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  tax_id: string;
  payment_methods: CreditCardPaymentMethod[];
  default_payment_method_id?: string;
  seat_reservations: SeatReservation[];
  event_purchases: EventPurchase[];
  created_at: string;
  updated_at: string;
}
