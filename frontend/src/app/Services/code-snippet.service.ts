import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_87(); // Replaced with helper function

export interface CodeSnippet {
  vulnLines?: number[]
  snippet: string
}

frontend_helper_86(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class CodeSnippetService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/snippets'

frontend_helper_73(); // Replaced with helper function

  get (key: string): Observable<CodeSnippet> {
    return this.http.get<CodeSnippet>(`${this.host}/${key}`).pipe(map((response: CodeSnippet) => response), catchError((err) => { throw err }))
  }

  challenges (): Observable<string[]> {
    return this.http.get(`${this.host}`).pipe(map((response: any) => response.challenges), catchError((err) => { throw err }))
  }
}
