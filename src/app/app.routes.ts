import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DespreComponent } from './despre/despre.component';
import { BoboseniiComponent } from './bobosenii/bobosenii.component';
import { NotFoundComponent } from './404/404.component';
import { DespreTedyComponent } from './despre/despre-tedy/despre-tedy.component';
import { DespreKatyComponent } from './despre/despre-katy/despre-katy.component';
import { DespreDadaComponent } from './despre/despre-dada/despre-dada.component';
import { DespreRandyComponent } from './despre/despre-randy/despre-randy.component';
import { AutentificareComponent } from './autentificare/autentificare.component';
import { cavalerGuard } from './cavaler.guard';
import { ToastleandComponent } from './component/toastleand/toastleand.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'toast', title: 'toastleand', component: ToastleandComponent },
  {
    path: 'bobosenii',
    title: 'Bobosenii',
    canActivate: [cavalerGuard],
    component: BoboseniiComponent,
  },
  { path: 'auth', title: 'autentificare', component: AutentificareComponent },
  { path: 'despre', title: 'Despre', component: DespreComponent },
  {
    path: 'despre',
    children: [
      {
        path: 'despre-tedy',
        title: 'despre-tedy',
        component: DespreTedyComponent,
      },
      {
        path: 'despre-katy',
        title: 'despre-katy',
        component: DespreKatyComponent,
      },
      {
        path: 'despre-dada',
        title: 'despre-dada',
        component: DespreDadaComponent,
      },
      {
        path: 'despre-randy',
        title: 'despre-randy',
        component: DespreRandyComponent,
      },
    ],
  },

  { path: '**', title: '404', component: NotFoundComponent },
];
