import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-404',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './404.component.html',
  styleUrl: './404.component.css',
})
export class NotFoundComponent {}
