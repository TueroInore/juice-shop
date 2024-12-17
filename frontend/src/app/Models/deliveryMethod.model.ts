import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

export interface DeliveryMethod {
  id: number
  name: string
  price: number
  eta: number
  icon: string
}
