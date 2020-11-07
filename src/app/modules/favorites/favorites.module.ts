import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import{FavoritesTipsArticlesComponent} from '../../favorites-tips-articles/favorites-tips-articles.component';

@NgModule({
  declarations: [FavoritesTipsArticlesComponent],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports: [
    FavoritesTipsArticlesComponent
  ],
})
export class FavoritesModule { }
