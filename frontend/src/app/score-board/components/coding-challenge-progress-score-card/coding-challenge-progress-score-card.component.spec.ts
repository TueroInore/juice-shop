import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_59(); // Replaced with helper function

import { ScoreCardComponent } from '../score-card/score-card.component'
import { CodingChallengeProgressScoreCardComponent } from './coding-challenge-progress-score-card.component'
import { TranslateModule } from '@ngx-translate/core'

describe('CodingChallengeProgressScoreCardComponent', () => {
  let component: CodingChallengeProgressScoreCardComponent
  let fixture: ComponentFixture<CodingChallengeProgressScoreCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ScoreCardComponent,
        CodingChallengeProgressScoreCardComponent
      ],
      imports: [TranslateModule.forRoot()]
    })
      .compileComponents()

    fixture = TestBed.createComponent(CodingChallengeProgressScoreCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

Helpers.frontend_helper_22(); // Replaced with helper function