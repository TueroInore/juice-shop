import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_27(); // Replaced with helper function

import { Web3SandboxComponent } from './web3-sandbox.component'
import { CodemirrorModule } from '@ctrl/ngx-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror-solidity/solidity'
import { TranslateModule } from '@ngx-translate/core'

const routes: Routes = [
  {
    path: '',
    component: Web3SandboxComponent
  }
]

@NgModule({
  declarations: [Web3SandboxComponent],
  imports: [
    CodemirrorModule,
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FaucetModule {
  constructor (
    public configurationService: ConfigurationService,
    public overlayContainer: OverlayContainer
  ) {
    configurationService.getApplicationConfiguration().subscribe((conf) => {
      overlayContainer
        .getContainerElement()
        .classList.add(conf.application.theme + '-theme')
    })
  }
}
