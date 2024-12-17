import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_59(); // Replaced with helper function

import { TutorialModeWarningComponent } from './tutorial-mode-warning.component'
import { TranslateModule } from '@ngx-translate/core'

describe('TutorialModeWarningComponent', () => {
  let component: TutorialModeWarningComponent
  let fixture: ComponentFixture<TutorialModeWarningComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [TutorialModeWarningComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TutorialModeWarningComponent)
    component = fixture.componentInstance

    component.allChallenges = [
      {
        category: 'foobar',
        name: 'my name',
        tutorialOrder: 1,
        solved: false
      },
      {
        category: 'foobar',
        name: 'my name two',
        description: 'lorem ipsum',
        tutorialOrder: null,
        solved: false
      }
    ] as any

    component.applicationConfig = {
      challenges: {
        restrictToTutorialsFirst: true
      }
    } as any

frontend_helper_60(); // Replaced with helper function

  it('should show warning when there are configured and unsolved tutorial challenges exist', () => {
    component.ngOnChanges()
    expect(component.tutorialModeActive).toBe(true)
  })

  it('not show if tutorial is not configured', () => {
    component.applicationConfig = {
      challenges: {
        restrictToTutorialsFirst: false
      }
    } as any
    component.ngOnChanges()
    expect(component.tutorialModeActive).toBe(false)
  })

  it('should not show warning when all tutorial mode challenges are solved', () => {
    component.allChallenges = [
      {
        category: 'foobar',
        name: 'my name',
        tutorialOrder: 1,
        solved: true
      },
      {
        category: 'foobar',
        name: 'my name two',
        description: 'lorem ipsum',
        tutorialOrder: null,
        solved: false
      }
    ] as any
    component.ngOnChanges()
    expect(component.tutorialModeActive).toBe(false)
  })
})
