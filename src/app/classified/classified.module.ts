import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostAddComponent } from './components/post-add/post-add.component';
import { ClassifiedRoutingModule } from './classified.routing';
import { SharedModule } from '../shared/shared.module';
import { ViewBikesComponent } from './components/view-bikes/view-bikes.component';
import { AddDetailViewComponent } from './components/add-detail-view/add-detail-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ClassifiedRoutingModule
  ],
  declarations: [PostAddComponent, ViewBikesComponent, AddDetailViewComponent]
})
export class ClassifiedModule { }
