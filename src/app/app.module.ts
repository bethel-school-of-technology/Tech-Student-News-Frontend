import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NavBarComponent} from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import {FavoritesTipsArticlesComponent} from './favorites-tips-articles/favorites-tips-articles.component';
import {FeaturedProjectsArticlesComponent} from './featured-projects-articles/featured-projects-articles.component';
import {UpcomingEventsComponent} from './upcoming-events/upcoming-events.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import {ArticlesModule} from '../app/modules/articles/articles.module';
import {EventsModule} from '../app/modules/events/events.module';
import {SuggestionsModule} from '../app/modules/suggestions/suggestions.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FavoritesTipsArticlesComponent,
    FeaturedProjectsArticlesComponent,
    UpcomingEventsComponent,
    SuggestionsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
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
