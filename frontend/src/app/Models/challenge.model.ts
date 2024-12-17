import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

import { type SafeHtml } from '@angular/platform-browser'

export interface Challenge {
  name: string
  key: string
  category: string
  tags?: string
  description?: string | SafeHtml
  difficulty: 1 | 2 | 3 | 4 | 5 | 6
  hint?: string
  hintUrl?: string
  disabledEnv?: string
  solved?: boolean
  tutorialOrder?: number
  hasTutorial?: boolean
  hasSnippet?: boolean
  codingChallengeStatus?: 0 | 1 | 2
  mitigationUrl?: string
}
