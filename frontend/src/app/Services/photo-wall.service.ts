import * as Helpers from './utils/frontend_helpers';
import { Helpers.frontend_helper_1, Helpers.frontend_helper_2 } from './utils/frontend_helpers';

Helpers.frontend_helper_1(); // Replaced with helper function

Helpers.frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class PhotoWallService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/memories'

Helpers.frontend_helper_73(); // Replaced with helper function

  addMemory (caption: string, image: File) {
    const postData = new FormData()
    postData.append('image', image, caption)
    postData.append('caption', caption)
    return this.http.post(this.host, postData).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

  get () {
    return this.http.get(this.host + '/').pipe(map((response: any) => response.data), catchError((err: Error) => { throw err }))
  }
}
