export type PurchaseStatus = 'pending' | 'paid' | 'cancelled' | 'refunded';

export interface Event {
  id: string;
  title: string;
  promo_img: string;
  date_departure: string;
  date_return: string;
  destination_city: string;
  likes: number;
  description_text: string;
  price: string;
  tags: string;
}

export interface EventPurchase {
  id: string;
  event_id: string;
  reservation_ids: string[];
  payment_method_id: string;
  total_amount: number;
  currency: 'BRL';
  status: PurchaseStatus;
  purchased_at: string;
  refunded_at?: string;
}
