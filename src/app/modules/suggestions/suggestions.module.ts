import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {SuggestionsComponent} from '../../../app/suggestions/suggestions.component';

@NgModule({
  declarations: [SuggestionsComponent],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports: [
    SuggestionsComponent
  ],
})
export class SuggestionsModule { }
