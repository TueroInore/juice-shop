import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_91(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class CountryMappingService {
  private readonly hostServer = environment.hostServer
  constructor (private readonly http: HttpClient) { }

  getCountryMapping () {
    return this.http.get(this.hostServer + '/rest/country-mapping').pipe(catchError((err) => { throw err }))
  }
}
