import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {FeaturedProjectsArticlesComponent} from '../../featured-projects-articles/featured-projects-articles.component';

@NgModule({
  declarations: [FeaturedProjectsArticlesComponent],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports: [
    FeaturedProjectsArticlesComponent
  ],
})
export class ProjectsModule { }
