import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    title: 'Essensplan',
    loadComponent: () =>
      import('./component/application/searchbar/searchbar.component').then(
        (m) => m.SearchbarComponent,
      ),
  },
  {
    path: 'cards',
    title: 'Essensplan – Week Planner',
    loadComponent: () =>
      import('./component/application/date-card-wrapper/date-card-wrapper.component').then(
        (m) => m.DateCardWrapperComponent,
      ),
  },
  {
    path: 'about',
    title: 'Essensplan – About',
    loadComponent: () =>
      import('./component/application/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    title: 'Essensplan – Contact',
    loadComponent: () =>
      import('./component/application/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'recipe/:id',
    title: 'Essensplan – Recipe',
    loadComponent: () =>
      import('./component/application/recipe/recipe.component').then((m) => m.RecipeComponent),
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];
