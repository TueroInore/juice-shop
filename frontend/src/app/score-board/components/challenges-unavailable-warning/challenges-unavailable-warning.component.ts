import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

import { Component, EventEmitter, Input, type OnChanges, Output } from '@angular/core'

import { FilterSetting } from '../../filter-settings/FilterSetting'
import { type EnrichedChallenge } from '../../types/EnrichedChallenge'

@Component({
  selector: 'challenges-unavailable-warning',
  templateUrl: './challenges-unavailable-warning.component.html',
  styleUrls: ['./challenges-unavailable-warning.component.scss']
})
export class ChallengesUnavailableWarningComponent implements OnChanges {
  @Input()
  public challenges: EnrichedChallenge[]

Helpers.frontend_helper_62(); // Replaced with helper function

Helpers.frontend_helper_63(); // Replaced with helper function

  public numberOfDisabledChallenges = 0
  public disabledBecauseOfEnv: string | null = null
  public disabledOnWindows: boolean
  public numberOfDisabledChallengesOnWindows = 0

  public ngOnChanges () {
    const disabledChallenges = this.challenges.filter(challenge => challenge.disabledEnv !== null)
    const disabledOnWindows = disabledChallenges.filter(challenge => challenge.disabledEnv === 'Windows')
    this.numberOfDisabledChallenges = disabledChallenges.length
    if (this.numberOfDisabledChallenges > 0) {
      this.disabledBecauseOfEnv = disabledChallenges[0].disabledEnv
    }
    if (disabledOnWindows.length > 0) {
      this.disabledOnWindows = true
      this.numberOfDisabledChallengesOnWindows = disabledOnWindows.length
    }
  }

  public toggleShowDisabledChallenges () {
    const filterSetting = {
      ...structuredClone(this.filterSetting),
      showDisabledChallenges: !this.filterSetting.showDisabledChallenges
    }
    this.filterSetting = filterSetting
    this.filterSettingChange.emit(filterSetting)
  }
}
