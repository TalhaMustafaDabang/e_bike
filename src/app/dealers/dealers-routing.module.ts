import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DealersComponent } from './components/dealers/dealers.component';
import { RegisterComponent } from './components/register/register.component';
import { MechanicComponent } from './components/mechanic/mechanic.component';

const routes: Routes = [
  { path: '', redirectTo: '/register-info', pathMatch: 'full' },
 
  { path: 'register-info', component: RegisterComponent },
  { path: 'dealers', component: DealersComponent },
  { path: 'mechanic-bike', component: MechanicComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealersRoutingModule { }
