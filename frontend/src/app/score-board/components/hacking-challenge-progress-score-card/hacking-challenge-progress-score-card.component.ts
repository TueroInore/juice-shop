import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

import { Component, Input, type OnChanges, type OnInit, type SimpleChanges } from '@angular/core'
import { type EnrichedChallenge } from '../../types/EnrichedChallenge'

@Component({
  selector: 'hacking-challenge-progress-score-card',
  templateUrl: './hacking-challenge-progress-score-card.component.html',
  styleUrls: ['./hacking-challenge-progress-score-card.component.scss']
})
export class HackingChallengeProgressScoreCardComponent implements OnInit, OnChanges {
  @Input()
  public allChallenges: EnrichedChallenge[] = []

  public solvedChallenges: number

frontend_helper_66(); // Replaced with helper function

frontend_helper_67(); // Replaced with helper function

  private updatedNumberOfSolvedChallenges (): void {
    this.solvedChallenges = this.allChallenges.filter((challenge) => challenge.solved).length
  }
}
