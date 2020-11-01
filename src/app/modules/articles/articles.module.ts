import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FeaturedProjectsArticlesComponent} from '../../featured-projects-articles/featured-projects-articles.component';
import {FavoritesTipsArticlesComponent} from '../../favorites-tips-articles/favorites-tips-articles.component';

@NgModule({
  declarations: [FeaturedProjectsArticlesComponent,FavoritesTipsArticlesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FeaturedProjectsArticlesComponent,FavoritesTipsArticlesComponent
  ],
})
export class ArticlesModule { }
