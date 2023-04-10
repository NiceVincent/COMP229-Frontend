import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Video } from './video.model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  // Todo
  // change to cloud backend api url
  // readonly apiURL = 'http://localhost:3000/videos';
  readonly apiURL = 'http://localhost:3000/videos';
  videoList: Video[] = [];

  videoForm = this.fb.group({
    _id: [''],
    name: ['', Validators.required],
    videoLink: ['', Validators.required],
    notes: ['']
  });

  getVideoList() {
    this.http.get(this.apiURL)
      .pipe(catchError(this.errorHandler))
      .subscribe(res => {
        this.videoList = res as Video[];
      })
  }

  createVideoNote() {
    return this.http.post(`${this.apiURL}/add`, this.videoForm.value)
      .pipe(catchError(this.errorHandler))
  }

  updateVideoNote() {
    return this.http.post(`${this.apiURL}/edit/${this.videoForm.get('_id')?.value}`, 
      this.videoForm.value).pipe(catchError(this.errorHandler))
  }

  deleteVideoNote(noteId: string) {
    return this.http.delete(`${this.apiURL}/${noteId}`)
      .pipe(catchError(this.errorHandler))
  }

  private errorHandler(e: HttpErrorResponse) {
    if (e.status === 0) {
      console.log('some API exception : \n', e.error);
    } else {
      console.log(`some API exception with ${e.status} : \n`, e.error);
    }
    return throwError(() => new Error('Server Error, pls try again later'));
  }
}
