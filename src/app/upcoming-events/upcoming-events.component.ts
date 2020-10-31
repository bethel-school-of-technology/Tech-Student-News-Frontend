import { Component,Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../models/event';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {
  events: Event[];
  @Input() dataPath: string;   
constructor(private http: HttpClient) { }

ngOnInit() {
  this.http.get<Event[]>(this.dataPath).subscribe(events => {
  this.events = events ;
  });
}
}