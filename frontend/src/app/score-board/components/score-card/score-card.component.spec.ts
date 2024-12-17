import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_59(); // Replaced with helper function

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

frontend_helper_22(); // Replaced with helper function