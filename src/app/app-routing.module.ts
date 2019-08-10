import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './component/application/searchbar/searchbar.component';
import { DateCardWrapperComponent } from './component/application/date-card-wrapper/date-card-wrapper.component';

const routes: Routes = [
  { path: 'dashboard', component: SearchbarComponent },
  { path: 'cards', component: DateCardWrapperComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }