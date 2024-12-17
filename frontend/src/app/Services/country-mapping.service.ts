import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_91(); // Replaced with helper function

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
