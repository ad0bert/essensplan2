import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { SearchbarComponent } from './component/application/searchbar/searchbar.component';
import { DateCardWrapperComponent } from './component/application/date-card-wrapper/date-card-wrapper.component';
import { ContactComponent } from './component/application/contact/contact.component';
import { AboutComponent } from './component/application/about/about.component';
import { RecipeComponent } from './component/application/recipe/recipe.component';

const routes: Routes = [
  { path: 'dashboard', component: SearchbarComponent },
  { path: 'cards', component: DateCardWrapperComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

const routerOptions: ExtraOptions = {
  useHash: true,
  scrollPositionRestoration: 'enabled',
  onSameUrlNavigation: 'reload',
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }