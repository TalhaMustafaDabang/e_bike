import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BikeOfBrandComponent } from './components/bike-of-brand/bike-of-brand.component';
import { BikeDetailComponent } from './components/bike-detail/bike-detail.component';
import { OneCompanyAllBikesComponent } from './components/one-company-all-bikes/one-company-all-bikes.component';
import { SingleNewBikeComponent } from './components/single-new-bike/single-new-bike.component';




const routes: Routes = [
    { path: '', redirectTo: '/newbikes-dashboard', pathMatch: 'full' },
    { path: 'newbikes-dashboard', component: BrandListComponent },
    { path: 'bikeofbrand', component: OneCompanyAllBikesComponent },
    { path: 'bikedetail', component: SingleNewBikeComponent },

    // { path: 'bikedetail', component: BikeDetailComponent },
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewBikeRoutingModule { }
