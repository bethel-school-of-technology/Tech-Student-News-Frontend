import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component'
import {SuggestionsComponent} from './suggestions/suggestions.component';
import { FavoritesTipsArticlesComponent } from './favorites-tips-articles/favorites-tips-articles.component';
import { FeaturedProjectArticlesComponent } from './featured-project-articles/featured-project-articles.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SuggestionsComponent,
    FavoritesTipsArticlesComponent,
    FeaturedProjectArticlesComponent,
    UpcomingEventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
