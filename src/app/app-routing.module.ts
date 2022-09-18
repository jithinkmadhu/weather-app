import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EachCountryComponent } from './each-country/each-country.component';
import { MoreDetailsComponent } from './more-details/more-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: EachCountryComponent },
  { path: 'home/:id', component: MoreDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
