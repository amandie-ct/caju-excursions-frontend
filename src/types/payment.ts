import type { Address } from './user';

export interface CreditCardInput {
  card_number: string;
  expiration_month: string;
  expiration_year: string;
  cvv: string;
  cardholder_name: string;
  billing_address: Address;
}

export interface CreditCardPaymentMethod {
  id: string;
  type: 'credit_card';
  brand?: string;
  last_four_digits: string;
  expiration_month: string;
  expiration_year: string;
  cardholder_name: string;
  billing_address: Address;
  gateway_token: string;
  is_default: boolean;
}
