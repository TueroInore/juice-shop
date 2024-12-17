import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import {
  waitInMs
} from './helpers/helpers'
import { type ChallengeInstruction } from './'

export const TutorialUnavailableInstruction: ChallengeInstruction = {
  name: null,
  hints: [
    {
      text:
        '😓 Sorry, this hacking challenge does not have a step-by-step tutorial (yet) ... 🧭 Can you find your own way to solve it?',
      fixture: 'app-navbar',
      resolved: waitInMs(15000)
    },
    {
      text:
        '✍️ Do you want to contribute a tutorial for this challenge? [Check out our documentation](https://pwning.owasp-juice.shop/part3/tutorials.html) to learn how! 🏫',
      fixture: 'app-navbar',
      resolved: waitInMs(15000)
    },
    {
      text:
        'And now: 👾 **GLHF** with this challenge!',
      fixture: 'app-navbar',
      resolved: waitInMs(10000)
    }
  ]
}
