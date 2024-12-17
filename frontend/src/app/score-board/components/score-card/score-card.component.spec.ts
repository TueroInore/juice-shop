import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_59(); // Replaced with helper function

import { ScoreCardComponent } from './score-card.component'

describe('ScoreCardComponent', () => {
  let component: ScoreCardComponent
  let fixture: ComponentFixture<ScoreCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScoreCardComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(ScoreCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

Helpers.frontend_helper_22(); // Replaced with helper function