import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LeftNavPannelComponent } from './components/left-nav-pannel/left-nav-pannel.component';
import { RouterModule } from '@angular/router';
import { AddsAreaComponent } from './components/adds-area/adds-area.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],

  declarations: [
    NavBarComponent,
    LeftNavPannelComponent,
    FooterComponent,
    AddsAreaComponent
  ],
  exports: [
    NavBarComponent,
    LeftNavPannelComponent,
    FooterComponent,
    AddsAreaComponent
  ]

})
export class SharedModule { }
