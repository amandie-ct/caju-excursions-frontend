type Amenity =
  | 'wifi'
  | 'sleeper'
  | 'usb_charger'
  | 'air_conditioner'
  | 'restroom'
  | 'snacks'
  | 'water'
  | 'personal_guides';

type SeatStatus = 'available' | 'held' | 'booked';

interface Seat {
  id: number;
  label: string;
  status: SeatStatus;
}

export interface Bus {
  id: string;
  total_seats: number;
  seats: Seat[];
  amenities: Amenity[];
}
