import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from "./components/product-category/product-category.component";
import { ShopDashboardComponent } from './components/shop-dashboard/shop-dashboard.component';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductListsComponent } from './components/product-lists/product-lists.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShopNavComponent } from './components/shop-nav/shop-nav.component';
import { Category1Component } from './components/category1/category1.component';
import { Category2Component } from './components/category2/category2.component';
import { FeatureSellingSliderComponent } from './components/feature-selling-slider/feature-selling-slider.component';
import { ProductOfCategoryComponent } from './components/product-of-category/product-of-category.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule
  ],
  declarations: [ProductCategoryComponent,
    ShopDashboardComponent,
    ProductListsComponent,
    ProductDetailsComponent,
    ShopNavComponent,
    Category1Component,
    Category2Component,
    FeatureSellingSliderComponent,
    ProductOfCategoryComponent
  ]
})
export class ShopModule { }
