import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

import { Component, Inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { DOCUMENT } from '@angular/common'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (@Inject(DOCUMENT) private readonly _document: HTMLDocument, private readonly translate: TranslateService) {
    this.translate.setDefaultLang('en')
  }
}
