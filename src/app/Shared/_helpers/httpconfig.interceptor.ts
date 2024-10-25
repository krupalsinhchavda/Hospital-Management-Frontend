import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router,
        private snackBar: MatSnackBar
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authService.currentUserValue;
        const token = currentUser?.accessToken || (localStorage.getItem('currentAdmin') ? JSON.parse(localStorage.getItem('currentAdmin') || '{}').token : '');

        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                }
            });
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';

                switch (error.status) {
                    case 400:
                        errorMessage = error.error.message;
                        this.snackBar.open(errorMessage, 'Close', {
                            duration: 2000,
                        });
                        break;
                    case 401:
                        errorMessage = 'Unauthorized';
                        localStorage.clear();
                        this.router.navigate(['/auth/login']);
                        break;
                    case 403:
                        errorMessage = 'Forbidden';
                        localStorage.clear();
                        this.router.navigate(['/auth/login']);
                        break;
                    case 404:
                        errorMessage = 'Not Found';
                        break;
                    case 405:
                        errorMessage = 'Method Not Allowed';
                        break;
                    case 406:
                        errorMessage = 'Not Acceptable';
                        break;
                    case 407:
                        errorMessage = 'Proxy Authentication Required';
                        break;
                    case 408:
                        errorMessage = 'Request Timeout';
                        break;
                    case 409:
                        errorMessage = 'Conflict';
                        break;
                    case 410:
                        errorMessage = 'Gone';
                        break;
                    case 411:
                        errorMessage = 'Length Required';
                        break;
                    case 412:
                        errorMessage = 'Precondition Failed';
                        break;
                    case 413:
                        errorMessage = 'Payload Too Large';
                        break;
                    case 414:
                        errorMessage = 'URI Too Long';
                        break;
                    case 415:
                        errorMessage = 'Unsupported Media Type';
                        break;
                    case 416:
                        errorMessage = 'Range Not Satisfiable';
                        break;
                    case 417:
                        errorMessage = 'Expectation Failed';
                        break;
                    case 422:
                        errorMessage = error.error.errors[0].message;
                        this.snackBar.open(errorMessage, 'Close', {
                            duration: 2000,
                        });
                        break;
                    case 500:
                        errorMessage = 'Internal Server Error';
                        break;
                    case 501:
                        errorMessage = 'Not Implemented';
                        break;
                    case 502:
                        errorMessage = 'Bad Gateway';
                        break;
                    case 503:
                        errorMessage = 'Service Unavailable';
                        break;
                    case 504:
                        errorMessage = 'Gateway Timeout';
                        break;
                    case 505:
                        errorMessage = 'HTTP Version Not Supported';
                        break;
                    default:
                        errorMessage = 'Unknown Error';
                        break;
                }

                this.snackBar.open(errorMessage, 'Close', {
                    duration: 2000,
                });
                return throwError(() => new Error(errorMessage));
            })
        );
    }
}