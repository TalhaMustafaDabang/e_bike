import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ShopDashboardComponent } from './components/shop-dashboard/shop-dashboard.component';
import { ProductOfCategoryComponent } from './components/product-of-category/product-of-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';





const routes: Routes = [
    { path: '', redirectTo: '/shop-dashboard', pathMatch: 'full' },
    { path: 'shop-dashboard', component: ShopDashboardComponent },
    { path: 'product-category', component: ProductOfCategoryComponent },
    { path: 'product-detail', component: ProductDetailsComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule { }
