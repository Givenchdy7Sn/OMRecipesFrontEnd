import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDashboardComponent } from './src/recipe-dashboard/recipe-dashboard.component';

const routes: Routes = [
  { path: '', component: RecipeDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
