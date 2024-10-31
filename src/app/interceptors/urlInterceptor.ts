import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { environment } from "../environment";

export function urlinterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
     let apiUrl = environment.apiUrl
     const modifiedReq = req.clone({ url: apiUrl+req.url });
    return next(modifiedReq)
  }