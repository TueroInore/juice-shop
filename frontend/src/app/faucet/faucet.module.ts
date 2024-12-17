import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_27(); // Replaced with helper function

import { FaucetComponent } from './faucet.component'
import { TranslateModule } from '@ngx-translate/core'

const routes: Routes = [
  {
    path: '',
    component: FaucetComponent
  }
]

@NgModule({
  declarations: [FaucetComponent],
  imports: [
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
  constructor (public configurationService: ConfigurationService, public overlayContainer: OverlayContainer) {
    configurationService.getApplicationConfiguration().subscribe((conf) => {
      overlayContainer.getContainerElement().classList.add(conf.application.theme + '-theme')
    })
  }
}
