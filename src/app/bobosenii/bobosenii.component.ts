import { Component } from '@angular/core';
import { assert } from 'console';
import { BobitaDirective } from '../directives/bobita.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bobosenii',
  standalone: true,
  imports: [BobitaDirective, CommonModule, FormsModule],
  templateUrl: './bobosenii.component.html',
  styleUrl: './bobosenii.component.css',
})
export class BoboseniiComponent {
  constructor() {
    if (typeof localStorage !== 'undefined') {
      const boboStocat = localStorage.getItem('bobii');
      if (boboStocat) {
        this.bombo = JSON.parse(boboStocat);
      }
    }
  }
  spune: string = 'tiiiiiiiiiiiiiiiiiiitluuuuuuuuu';
  stil: boolean = true;
  activat: boolean = false;
  pad = 20;
  bobNou = '';
  candScriu(eveniment: Event) {
    this.bobNou = (<HTMLInputElement>eveniment.target).value;
  }

  bobita: any = [
    {
      id: 1,
      nume: 'bobita',
      intro: 'bobitaaaaaaaaaaaaaaa',
      imagine: 'assets/poze/bobita.jfif',
    },
    {
      id: 2,
      nume: 'bobiita',
      intro: 'bobiiiiiiiiiiiiiiita',
      imagine: 'assets/poze/bobita2.jfif',
    },
  ];
  bombo: any[] = [];
  bobStatus = 'inca nu ai adaugat bobosenii noi';
  adaugaBob() {
    if (this.bobNou.trim() !== '') {
      this.bombo.push(this.bobNou);
      this.bobNou = '';
      this.bobStatus = 'Ai crea o bobosenie noua ';
      localStorage.setItem('bobii', JSON.stringify(this.bombo));
    }
  }
}
