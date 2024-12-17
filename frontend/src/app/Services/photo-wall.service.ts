import { frontend_helper_1, frontend_helper_2 } from './utils/frontend_helpers';

frontend_helper_1(); // Replaced with helper function

frontend_helper_72(); // Replaced with helper function

@Injectable({
  providedIn: 'root'
})
export class PhotoWallService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/memories'

frontend_helper_73(); // Replaced with helper function

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
