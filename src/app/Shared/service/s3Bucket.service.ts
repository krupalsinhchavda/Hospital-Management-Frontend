import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class S3BucketService {

    constructor(private http: HttpClient) { }
    /**
      * Handles errors that occur during an operation by wrapping the error in an observable that can be caught by subscribers.
      * This method simply returns the error as-is, allowing the caller to handle it as needed.
      */
    private handleError(error: HttpErrorResponse) {
        return throwError(() => error);
    }
    /**
     * Get S3bucket file URL.
     */
    getS3FileUrl(fileName: string, fileType: string): Observable<any> {
        const fileNameQuery = `fileName=${fileName}`;
        const fileTypeQuery = `fileType=${fileType}`;
        const queryParams = [fileNameQuery, fileTypeQuery].join('&');
        const queryPrefix = '?';

        return this.http.get<any>(`${environment.apiUrl}/api/s3upload/fileUrl${queryPrefix}${queryParams}`)
            .pipe(catchError(this.handleError));
    }
}