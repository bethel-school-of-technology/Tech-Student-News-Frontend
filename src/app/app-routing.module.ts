import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FavoritesTipsArticlesComponent } from '../app/favorites-tips-articles/favorites-tips-articles.component';
import {FeaturedProjectsArticlesComponent} from '../app/featured-projects-articles/featured-projects-articles.component';
import {UpcomingEventsComponent} from '../app/upcoming-events/upcoming-events.component';
import {SuggestionsComponent} from '../app/suggestions/suggestions.component';
import { from } from 'rxjs';

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
    path: 'featured-project-articles',
    component: FeaturedProjectsArticlesComponent
  },
  {
  path: 'upcoming-events',
  component: UpcomingEventsComponent
},
{
  path:'suggestions',
  component: SuggestionsComponent
},

{
  path:'',
  redirectTo: '/home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
