import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_91(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})

export class DataSubjectService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/user'

frontend_helper_73(); // Replaced with helper function

  erase (params: any) {
    return this.http.post(this.host + '/erasure-request', params).pipe(catchError((error: Error) => { throw error })
    )
  }

  dataExport (params: any) {
    return this.http.post(this.host + '/data-export', params).pipe(catchError((err) => { throw err }))
  }
}
