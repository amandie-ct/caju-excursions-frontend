export type ReservationStatus = 'held' | 'confirmed' | 'expired' | 'cancelled';

export interface SeatReservation {
  id: string;
  event_id: string;
  bus_id: string;
  seat_id: number;
  status: ReservationStatus;
  reserved_at: string;
  expires_at?: string;
  confirmed_at?: string;
  can_cancel: boolean;
  cancelled_at?: string;
}
