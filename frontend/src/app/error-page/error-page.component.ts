import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { TranslateService } from '@ngx-translate/core'
import { Component, type OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSlash, faHandPaper } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSlash, faHandPaper)

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  public error: string | null = null

  constructor (private readonly route: ActivatedRoute, private readonly translate: TranslateService) {
  }

  ngOnInit () {
    const errorKey = this.route.snapshot.queryParams.error
    if (errorKey) {
      this.translate.get(errorKey).subscribe((errorMessage) => {
        this.error = errorMessage
      }, (translationId) => {
        this.error = translationId
      })
    }
  }
}
