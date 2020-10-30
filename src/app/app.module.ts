import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import {ArticlesFeatureProjectComponent} from '../app/components/articlesFeatureProject/articles-feature-project.component';
import {ArticlesFavoriteTipsComponent} from './components/articlesFavoriteTips/articles-favorite-tips.component';
import {EventsComponent} from './components/events/upcoming-events.component';
import {SuggestionsComponent} from './components/suggestions/suggestions.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ArticlesFeatureProjectComponent,
    ArticlesFavoriteTipsComponent,
    EventsComponent,
    SuggestionsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent
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
