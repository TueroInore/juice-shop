import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_61(); // Replaced with helper function

@Component({
  selector: 'difficulty-stars',
  templateUrl: './difficulty-stars.component.html',
  styleUrls: ['./difficulty-stars.component.scss']
})
export class DifficultyStarsComponent {
  @Input()
    difficulty: 1 | 2 | 3 | 4 | 5 | 6
}
