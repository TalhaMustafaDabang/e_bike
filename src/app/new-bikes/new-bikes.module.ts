import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BikeOfBrandComponent } from './components/bike-of-brand/bike-of-brand.component';
import { BikeDetailComponent } from './components/bike-detail/bike-detail.component';
import { SharedModule } from '../shared/shared.module';
import { NewBikeRoutingModule } from './new-bikes-routing.module';
import { OneCompanyAllBikesComponent } from './components/one-company-all-bikes/one-company-all-bikes.component';
import { SingleNewBikeComponent } from './components/single-new-bike/single-new-bike.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NewBikeRoutingModule
  ],
  declarations: [
    BrandListComponent,
    BikeOfBrandComponent,
    BikeDetailComponent,
    OneCompanyAllBikesComponent,
    SingleNewBikeComponent
  ]
})
export class NewBikesModule { }
