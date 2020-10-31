import { Component,Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Suggestion} from '../models/suggestion';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  suggestions: Suggestion[];
  @Input() dataPath: string;   
constructor(private http: HttpClient) { }

ngOnInit() {
  this.http.get<Suggestion[]>(this.dataPath).subscribe(suggestions => {
  this.suggestions = suggestions ;
  });
}
}