import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const localToken = localStorage.getItem("token_angular")

  if (localToken != null) {
    // const decodedToken =  jwtDecode(localToken!)
    // console.log(decodedToken)

    return true

  } else {

    // localStorage.setItem("redirectUrl", state.url)
    
    router.navigate(["/login"],{queryParams: { stateUrl: state.url}})
    return false

  }
};
