import { Component } from '@angular/core';
import { SoboService } from '../sobo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private ssobo: SoboService, private toastr: ToastrService) {}
  personaje: any[] = [];
  nume?: string;
  varsta?: number;
  ngOnInit(): void {
    this.afiseazaPers();
  }
  afiseazaPers(): void {
    this.ssobo.obtinePersonaje().subscribe(
      (response) => {
        this.personaje = response;
      },
      (eroare) => {
        console.log('eroare la afisare personaj', eroare);
      }
    );
  }
  adaugarePersonaj(): void {
    this.ssobo.adaugaPersonaj(this.nume!, this.varsta!).subscribe(
      (response) => {
        this.afiseazaPers();
        this.toastr.success('personaj adaugat cu succes');
        this.nume;
        this.varsta;
      },
      (eroare) => {
        console.log('eroare la afisare:', eroare);
      }
    );
  }
}
