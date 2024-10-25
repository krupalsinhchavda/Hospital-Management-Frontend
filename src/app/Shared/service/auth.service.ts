import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface User {
  email: string;
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private login_route = '/login'; // Replace with actual login API URL

  constructor(private http: HttpClient) {
    const storedUser = this.getLocalStorageItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(storedUser || 'null'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private getLocalStorageItem(key: string): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError(() => new Error(error.message));
  }

  /**
   * Logs in a user and stores the user data in local storage.
   */
  login(formdata: { email: string; password: string; fcm_token: string }): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}${this.login_route}`, formdata)
      .pipe(
        map(user => {
          user.accessToken = user.accessToken; // Assuming user has accessToken
          if (typeof window !== 'undefined') {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          this.currentUserSubject.next(user);
          return user;
        }),
        catchError(this.handleError)
      );
  }

  /**
   * Logs out the current user and clears local storage.
   */
  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }
}
