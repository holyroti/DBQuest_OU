import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ParsonsProblemComponent } from './parsons-problem/parsons-problem.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'parsons/:questionId/:stage', component: ParsonsProblemComponent },
  { path: 'parsons', redirectTo: 'parsons/1/1', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
