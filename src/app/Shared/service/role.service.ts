import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class RoleService {
    private apiUrl = environment.apiUrl;
    private ROLELIST = '';

    constructor(private http: HttpClient) { }
    /**
      * Handles errors that occur during an operation by wrapping the error in an observable that can be caught by subscribers.
      * This method simply returns the error as-is, allowing the caller to handle it as needed.
      */
    private handleError(error: HttpErrorResponse) {
        return throwError(() => error);
    }
    /**
    * Retrieves all Roles from the server.
    */
    getRoleList(): Observable<any> {
        return this.http.get<any>(this.apiUrl + this.ROLELIST).pipe(catchError(this.handleError));;
    }

    /**
    *Get Role Module 
    */
    getModules(): Observable<any> {
        return this.http.get(this.apiUrl + `${this.ROLELIST}/moduleHistory`)
            .pipe(catchError(this.handleError));
    }

    /**
    * Add / Edit Role data.
    */
    AddEditRoleData(data: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}${this.ROLELIST}`, data)
            .pipe(catchError(this.handleError));
    }
    /**
     * Deletes Role data based on the provided role ID.
     */
    deleteRoleData(data: number | string): Observable<HttpResponse<{}>> {
        return this.http.delete<HttpResponse<{}>>(`${environment.apiUrl}${this.ROLELIST}/${data}`)
            .pipe(catchError(this.handleError));
    }
}
