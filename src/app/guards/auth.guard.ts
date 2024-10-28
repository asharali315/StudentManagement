import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn =  (state,router) => {
  const _router  = inject(Router)
  var  user = localStorage.getItem('userData')

  if(user === null || user === undefined)
  {
    _router.navigate(['login'])
    return false;
  }
 
 
  return true;
};
