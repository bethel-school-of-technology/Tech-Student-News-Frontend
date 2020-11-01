import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component'
import {SuggestionsComponent} from './suggestions/suggestions.component';
import { FavoritesTipsArticlesComponent } from './favorites-tips-articles/favorites-tips-articles.component';
import { FeaturedProjectsArticlesComponent } from './featured-projects-articles/featured-projects-articles.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';

import {ArticlesModule} from '../app/modules/articles/articles.module';
import {EventsModule} from '../app/modules/events/events.module';
import {SuggestionsModule} from '../app/modules/suggestions/suggestions.module';
import bootstrap from "bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SuggestionsComponent,
    FavoritesTipsArticlesComponent,
    FeaturedProjectsArticlesComponent,
    UpcomingEventsComponent,
    FeaturedProjectsArticlesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ArticlesModule,
    EventsModule,
    SuggestionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
