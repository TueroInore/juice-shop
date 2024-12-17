import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_91(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})

export class DataSubjectService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/user'

Helpers.frontend_helper_73(); // Replaced with helper function

  erase (params: any) {
    return this.http.post(this.host + '/erasure-request', params).pipe(catchError((error: Error) => { throw error })
    )
  }

  dataExport (params: any) {
    return this.http.post(this.host + '/data-export', params).pipe(catchError((err) => { throw err }))
  }
}
