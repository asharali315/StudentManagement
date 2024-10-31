import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environment";

export function tokeninterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    let user!:any 
    let userData = localStorage.getItem('userData')
    if(userData)
        user = JSON.parse(userData)

    const newReq = req.clone({
    headers: req.headers.append('Authorization', 'Bearer '+user?.token),
  });
   return next(newReq)
 }