import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealersComponent } from './components/dealers/dealers.component';
import { RegisterComponent } from './components/register/register.component';
import { MechanicComponent } from './components/mechanic/mechanic.component';
import { DealersRoutingModule } from './dealers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DealersRoutingModule,
  
  ],
  declarations: [DealersComponent, RegisterComponent, MechanicComponent]
})
export class DealersModule { }
