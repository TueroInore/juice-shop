import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_59(); // Replaced with helper function

import { HackingChallengeProgressScoreCardComponent } from './hacking-challenge-progress-score-card.component'
import { TranslateModule } from '@ngx-translate/core'
import { ScoreCardComponent } from '../score-card/score-card.component'

describe('HackingChallengeProgressScoreCardComponent', () => {
  let component: HackingChallengeProgressScoreCardComponent
  let fixture: ComponentFixture<HackingChallengeProgressScoreCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScoreCardComponent, HackingChallengeProgressScoreCardComponent],
      imports: [TranslateModule.forRoot()]
    })
      .compileComponents()

    fixture = TestBed.createComponent(HackingChallengeProgressScoreCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

frontend_helper_22(); // Replaced with helper function