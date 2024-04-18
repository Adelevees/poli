import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AutentificareService } from '../autentificare.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  userName: string = 'Pooky';
  constructor(private aut: AutentificareService) {}
  get stareUser(): boolean {
    return this.aut.userConectat();
  }
  deconect(): void {
    this.aut.deconectare();
  }
}
