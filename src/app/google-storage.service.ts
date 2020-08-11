import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class GoogleStorageService {
  galleryUrl: string = 'http://localhost:3000/api/v1/gallery';

  constructor(private _http: HttpClient) {}

  uploadFile(file:File): Observable<any> {
    // console.log('inside storage service upload...', file.name);
    // axios.post(this.galleryUrl, file).then(res => console.log(res.data));
    // let doc = Object.assign({}, file);
        const formData: FormData = new FormData();
        formData.append('fileKey', file, file.name);
    return this._http.post(this.galleryUrl, formData);
    // return of(doc);
  }
}
