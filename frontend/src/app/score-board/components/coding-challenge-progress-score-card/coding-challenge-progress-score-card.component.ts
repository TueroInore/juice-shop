import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_64(); // Replaced with helper function

frontend_helper_65(); // Replaced with helper function

@Component({
  selector: 'coding-challenge-progress-score-card',
  templateUrl: './coding-challenge-progress-score-card.component.html',
  styleUrls: ['./coding-challenge-progress-score-card.component.scss']
})
export class CodingChallengeProgressScoreCardComponent implements OnInit, OnChanges {
  @Input()
  public allChallenges: EnrichedChallenge[] = []

  public availableCodingChallenges: number
  public solvedCodingChallenges: number

frontend_helper_66(); // Replaced with helper function

frontend_helper_67(); // Replaced with helper function

  private updatedNumberOfSolvedChallenges (): void {
    const availableCodingChallenges = this.allChallenges
      .filter((challenge) => challenge.hasCodingChallenge)

    this.solvedCodingChallenges = availableCodingChallenges
      .map((challenge) => challenge.codingChallengeStatus)
      .reduce((a, b) => a + b, 0) // sum up the scores
    // multiply by 2 because each coding challenge has 2 parts (find it and fix it)
    this.availableCodingChallenges = availableCodingChallenges.length * 2
  }
}
