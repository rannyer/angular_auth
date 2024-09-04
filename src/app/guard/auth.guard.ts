import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  const localToken = localStorage.getItem("token_angular")
  const decodedToken =  jwtDecode(localToken!)
  if (localToken != null) {
    
    console.log(decodedToken)
    return true

  } else {

    router.navigateByUrl("login")
    return false

  }
};
