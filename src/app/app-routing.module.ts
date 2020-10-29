import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FavoritesTipsArticlesComponent } from '../app/favorites-tips-articles/favorites-tips-articles.component';
import {FeaturedProjectArticlesComponent} from '../app/featured-project-articles/featured-project-articles.component';
import {UpcomingEventsComponent} from '../app/upcoming-events/upcoming-events.component';
import {SuggestionsComponent} from '../app/suggestions/suggestions.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nav-bar',
    component: NavBarComponent
  },
  {
    path: 'favorites-tips-articles',
    component: FavoritesTipsArticlesComponent
  },
  {
    path: 'feature-project-articles',
    component: FeaturedProjectArticlesComponent
  },
  {
  path: 'upcoming-events',
  component: UpcomingEventsComponent
},
{
  path:'suggestions',
  component: SuggestionsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
