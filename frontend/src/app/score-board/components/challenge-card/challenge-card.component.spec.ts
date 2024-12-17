import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_59(); // Replaced with helper function

import { ChallengeCardComponent } from './challenge-card.component'
import { type Config } from 'src/app/Services/configuration.service'
import { TranslateModule } from '@ngx-translate/core'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'

describe('ChallengeCard', () => {
  let component: ChallengeCardComponent
  let fixture: ComponentFixture<ChallengeCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), MatIconModule, MatTooltipModule],
      declarations: [ChallengeCardComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(ChallengeCardComponent)
    component = fixture.componentInstance

    component.challenge = {
      category: 'foobar',
      name: 'my name',
      mitigationUrl: 'https://owasp.example.com',
      hasCodingChallenge: true,
      description: 'lorem ipsum',
      tagList: ['Easy']
    } as any

    component.applicationConfiguration = {
      ctf: {
        showFlagsInNotifications: true
      },
      challenges: {
        codingChallengesEnabled: 'solved'
      },
      hackingInstructor: {
        isEnabled: true
      }
    } as Config

Helpers.frontend_helper_60(); // Replaced with helper function

Helpers.frontend_helper_3(); // Replaced with helper function

  it('should not show a mitigation link when challenge has it but isnt solved', () => {
    component.challenge.solved = false
    component.challenge.mitigationUrl = 'https://owasp.example.com'
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('[aria-label="Vulnerability mitigation link"]'))
      .toBeFalsy()
  })

  it('should show a mitigation link when challenge has it but isnt solved', () => {
    component.challenge.solved = true
    component.challenge.mitigationUrl = 'https://owasp.example.com'
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector('[aria-label="Vulnerability mitigation link"]'))
      .toBeTruthy()
  })
})
