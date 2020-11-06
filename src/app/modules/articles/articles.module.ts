import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {FeaturedProjectsArticlesComponent} from '../../featured-projects-articles/featured-projects-articles.component';
import {FavoritesTipsArticlesComponent} from '../../favorites-tips-articles/favorites-tips-articles.component';

@NgModule({
  declarations: [FeaturedProjectsArticlesComponent,FavoritesTipsArticlesComponent],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports: [
    FeaturedProjectsArticlesComponent,FavoritesTipsArticlesComponent
  ],
})
export class ArticlesModule { }
