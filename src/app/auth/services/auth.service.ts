import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`/api/users`)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  getAuth(payload: User): Observable<User> {
    return this.http.post<User>(`/api/login/`, payload)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
