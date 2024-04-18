import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutentificareService {
  constructor(private router: Router) {}
  esteConectat: boolean = true;
  conectare(user: string, parola: string): boolean {
    if (user == 'Pooky' && parola == '123') {
      this.esteConectat = true;
      return true;
    } else {
      return false;
    }
  }
  deconectare(): void {
    this.esteConectat = false;
    this.router.navigate(['/auth']);
  }
  userConectat(): boolean {
    return this.esteConectat;
  }
}
