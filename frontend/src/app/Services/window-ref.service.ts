import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {
  get nativeWindow (): any {
    return getWindow()
  }
}

function getWindow (): any {
  return window
}
