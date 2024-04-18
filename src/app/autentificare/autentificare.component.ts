import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutentificareService } from '../autentificare.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-autentificare',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autentificare.component.html',
  styleUrl: './autentificare.component.css',
})
export class AutentificareComponent {
  conectare = true;
  utilizator = '';
  parola = '';
  parolaRepetata = '';
  eroare = '';
  constructor(private aut: AutentificareService, private router: Router, private toaster:ToastrService) {}
  activeazaFormular() {
    this.conectare = !this.conectare;
  }
  conect(): void {
    if (this.aut.conectare(this.utilizator, this.parola)) {
     this.toaster.success('bine ai revenit')
      
      this.router.navigate(['/bobosenii']);
    } 
    else {
      this.toaster.error('datele de conectare nu sunt corecte')
      this.eroare = 'Datele de conectare nu sunt corecte';
    }
  }
}
