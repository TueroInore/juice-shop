import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_87(); // Replaced with helper function

export interface CodeSnippet {
  vulnLines?: number[]
  snippet: string
}

Helpers.frontend_helper_86(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class CodeSnippetService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/snippets'

Helpers.frontend_helper_73(); // Replaced with helper function

  get (key: string): Observable<CodeSnippet> {
    return this.http.get<CodeSnippet>(`${this.host}/${key}`).pipe(map((response: CodeSnippet) => response), catchError((err) => { throw err }))
  }

  challenges (): Observable<string[]> {
    return this.http.get(`${this.host}`).pipe(map((response: any) => response.challenges), catchError((err) => { throw err }))
  }
}
