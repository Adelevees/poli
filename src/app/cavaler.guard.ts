import { CanActivateFn, Router } from '@angular/router';
import { AutentificareService } from './autentificare.service';
import { inject } from '@angular/core';

export const cavalerGuard: CanActivateFn = (route, state) => {

if(inject(AutentificareService).esteConectat){
  return true;

}
else{
  inject(Router).navigate(['/auth']);
  return false;}
};
