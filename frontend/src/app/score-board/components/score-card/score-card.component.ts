import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_61(); // Replaced with helper function

@Component({
  selector: 'score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent {
  @Input()
  public description: string

  @Input()
  public total: number

  @Input()
  public score: number

  @Input()
  public showAsPercentage: boolean = true

  @Input()
  public showProgressBar: boolean = true
}
