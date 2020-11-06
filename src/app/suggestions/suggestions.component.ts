import { Component,Input, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Suggestion} from '../models/suggestion';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  private suggestionRoute = 'http://localhost:3000/suggestion';
  public suggestions: Suggestion[];
  @Input() dataPath: string;   
constructor(private http: HttpClient) { }

getSuggestions() {
  this.http.get<Suggestion[]>(this.suggestionRoute).subscribe(suggestions => {
    this.suggestions = suggestions ;
    console.log('Suggestion',this.suggestions);
    });
}

ngOnInit() {
 this.getSuggestions();
}
}