import { Component,Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Suggestion} from '../models/suggestion';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  private suggestionsRoute = 'http://localhost:3000/suggestions';
  public suggestions: Suggestion[];
  @Input() dataPath: string;   
constructor(private http: HttpClient) { }

getSuggestions() {
  this.http.get<Suggestion[]>(this.suggestionsRoute).subscribe(suggestions => {
    this.suggestions = suggestions ;
    console.log('Suggestion',this.suggestions);
    });
}

ngOnInit() {
 this.getSuggestions();
}
}