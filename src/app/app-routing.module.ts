import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import {HomeComponent} from './home/home.component';
import {FavoritesTipsArticlesComponent} from './favorites-tips-articles/favorites-tips-articles.component';
import {FeaturedProjectsArticlesComponent} from './featured-projects-articles/featured-projects-articles.component';
import {UpcomingEventsComponent} from './upcoming-events/upcoming-events.component';
import {SuggestionsComponent} from './suggestions/suggestions.component';
//import { RegisterComponent } from './register/register.component';
//import { LoginComponent } from './login/login.component';
//import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'favorites-tips-articles',
    component: FavoritesTipsArticlesComponent
  },
  {
    path: 'featured-projects-articles',
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
//{
  //path:'register',
  //component: RegisterComponent
//},
//{
  //path:'login',
  //component: LoginComponent
//},
//{
  //path:'profile',
  //component: ProfileComponent
//},
{ path: "", pathMatch: "full", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
