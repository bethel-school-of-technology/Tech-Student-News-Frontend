import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ArticlesFavoriteTipsComponent} from './components/articlesFavoriteTips/articles-favorite-tips.component';
import {ArticlesFeatureProjectComponent} from './components/articlesFeatureProject/articles-feature-project.component';
import {EventsComponent} from './components/events/upcoming-events.component';
import {SuggestionsComponent} from './components/suggestions/suggestions.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'articlesFavoriteTips',
    component: ArticlesFavoriteTipsComponent
  },
  {
    path: 'articlesFeatureProject',
    component: ArticlesFeatureProjectComponent
  },
  {
  path: 'events',
  component: EventsComponent
},
{
  path:'suggestions',
  component: SuggestionsComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'profile',
  component: ProfileComponent
},
{ path: "", pathMatch: "full", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
