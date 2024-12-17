import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

export interface Backup {
  version: number
  continueCode?: string
  continueCodeFindIt?: string
  continueCodeFixIt?: string
  language?: string
  banners?: { welcomeBannerStatus?: string, cookieConsentStatus?: string }
}
