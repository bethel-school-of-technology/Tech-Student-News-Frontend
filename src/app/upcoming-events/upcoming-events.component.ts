import { Component,Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../models/event';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {
  private eventRoute = 'http://localhost:3000/event';
  public events: Event[];
  @Input() dataPath: string;   
constructor(private http: HttpClient) { }

getEvents (){
  this.http.get<Event[]>(this.eventRoute).subscribe(events => {
    this.events = events ;
    console.log('Event',this.events);
    });
}

ngOnInit() {
  this.getEvents();
}
}