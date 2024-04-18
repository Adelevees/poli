import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DespreKatyComponent } from './despre-katy/despre-katy.component';
import { DespreTedyComponent } from './despre-tedy/despre-tedy.component';

@Component({
  selector: 'app-despre',
  standalone: true,
  imports: [RouterLink, DespreKatyComponent, DespreTedyComponent],
  templateUrl: './despre.component.html',
  styleUrl: './despre.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DespreComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  @ViewChild(DespreKatyComponent) copilKaty!: DespreKatyComponent;
  @ViewChild(DespreTedyComponent) copilTedy!: DespreTedyComponent;
  culoareTedy = '';
  culoareKaty = '';
  ngAfterViewInit() {
    if (this.copilKaty) {
      this.culoareKaty = this.copilKaty.culoare;
      console.log('Informatiile din comp. Katy:', this.copilKaty);
      this.cdr.detectChanges();
    }
    if (this.copilTedy) {
      this.culoareTedy = this.copilTedy.culoare;
      console.log('Informatiile din comp. Tedy:', this.copilTedy);
      this.cdr.detectChanges();
    }
  }
}
