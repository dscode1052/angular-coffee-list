import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'coffeeList', component: CoffeeListComponent },
  { path: 'coffeeList/:id', component: CoffeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
