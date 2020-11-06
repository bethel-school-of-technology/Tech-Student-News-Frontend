import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {UpcomingEventsComponent} from '../../upcoming-events/upcoming-events.component';

@NgModule({
  declarations: [UpcomingEventsComponent],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports: [
    UpcomingEventsComponent
  ],
})
export class EventsModule { }
