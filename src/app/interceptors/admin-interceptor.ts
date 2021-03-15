import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
@Injectable()
export class AdminInterceptor implements HttpInterceptor {

    constructor(private authSvc: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        if (req.url.includes('/viewAll')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }

        if (req.url.includes('/users')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }
        if (req.url.includes('/userNew')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }

        if (req.url.includes('/userEdit')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }
        if (req.url.includes('/autores')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }
        if (req.url.includes('/autorNew')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }

        if (req.url.includes('/autorEdit')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }

        if (req.url.includes('/archiveros')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }
        if (req.url.includes('/archiveroNew')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }

        if (req.url.includes('/archiveroEdit')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }

        if (req.url.includes('/images')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }
        if (req.url.includes('/newImage')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }

        if (req.url.includes('/editImage')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }

        if (req.url.includes('/pdf')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }
        if (req.url.includes('/newPdf')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }

        if (req.url.includes('/editPdf')) {
            const authToken = this.authSvc.userTokenValue;
            const authReq = req.clone({
                setHeaders: {
                    auth: authToken,
                },
            });
            return next.handle(authReq);
        }



        return next.handle(req);
    }
}