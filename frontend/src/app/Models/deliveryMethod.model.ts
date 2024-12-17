import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

export interface DeliveryMethod {
  id: number
  name: string
  price: number
  eta: number
  icon: string
}
