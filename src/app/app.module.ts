import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './providers/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroService } from './providers/hero.service';
import { MessageService } from './providers/message.service';
import { MessagesComponent } from './components/messages/messages.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


// REDUX NGRX
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/combineReducer';
import { HomeComponent } from './container/home/home.component';
import { EffectsModule } from '@ngrx/effects';



// import { NavBarComponent } from './components/nav-bar/nav-bar.component';
// import { LeftNavPannelComponent } from './components/left-nav-pannel/left-nav-pannel.component';
// import { AddsAreaComponent } from './components/adds-area/adds-area.component';
import { BiekByBrandComponent } from './components/biek-by-brand/biek-by-brand.component';

import { SecondHandBiekComponent } from './components/second-hand-biek/second-hand-biek.component';
import { SecondHandBiekByCityComponent } from './components/second-hand-biek-by-city/second-hand-biek-by-city.component';
import { SecondHandBiekByPriceComponent } from './components/second-hand-biek-by-price/second-hand-biek-by-price.component';
import { FeaturedDealerComponent } from './components/featured-dealer/featured-dealer.component';
import { FeaturedUsedBiekComponent } from './components/featured-used-biek/featured-used-biek.component';

// import { SingleNewBikeComponent } from './components/single-new-bike/single-new-bike.component';
import { CompareBikesComponent } from './components/compare-bikes/compare-bikes.component';
import { BlogsComponent } from './components/blogs/blogs.component';
// import { SecondHandBiekComponent } from './components/second-hand-biek/second-hand-biek.component';



import { ShopModule } from './shop/shop.module'
import { SharedModule } from './shared/shared.module';
import { NewBikesModule } from './new-bikes/new-bikes.module';
import { ClassifiedModule } from './classified/classified.module';
import { DealersModule } from './dealers/dealers.module';

// EFFECTS 
import { ClassifierEffects } from './store/effects/classifier.effects';


@NgModule({
  imports: [
    BrowserModule,
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    AppRoutingModule,
    [EffectsModule.forRoot([ClassifierEffects])],
   
    ShopModule,
    SharedModule,
    NewBikesModule,
    ClassifiedModule,
    DealersModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HomeComponent,
    // NavBarComponent,
    // LeftNavPannelComponent,
    // AddsAreaComponent,
    BiekByBrandComponent,
    SecondHandBiekComponent,
    SecondHandBiekByCityComponent,
    SecondHandBiekByPriceComponent,
    FeaturedDealerComponent,
    FeaturedUsedBiekComponent,
    SecondHandBiekComponent,
    CompareBikesComponent,
    BlogsComponent,



  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
