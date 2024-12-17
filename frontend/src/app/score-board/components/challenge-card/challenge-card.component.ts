import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_61(); // Replaced with helper function

import { EnrichedChallenge } from '../../types/EnrichedChallenge'

import { hasInstructions, startHackingInstructorFor } from '../../../../hacking-instructor'
import { Config } from 'src/app/Services/configuration.service'

@Component({
  selector: 'challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss']
})
export class ChallengeCardComponent {
  @Input()
  public challenge: EnrichedChallenge

  @Input()
  public openCodingChallengeDialog: (challengeKey: string) => void

  @Input()
  public repeatChallengeNotification: (challengeKey: string) => void

  @Input()
  public applicationConfiguration: Config

  public hasInstructions = hasInstructions
  public startHackingInstructorFor = startHackingInstructorFor
}
