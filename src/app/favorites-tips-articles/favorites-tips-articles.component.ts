import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Favorites} from '../models/favorites';

@Component({
  selector: 'app-favorites-tips-articles',
  templateUrl: './favorites-tips-articles.component.html',
  styleUrls: ['./favorites-tips-articles.component.css']
})

export class FavoritesTipsArticlesComponent implements OnInit {
  private favoritesRoute = 'http://localhost:3000/favorites';  
  public favorites: Favorites[];
    @Input() dataPath: string;   
  constructor(private http: HttpClient) { }
getFavorites(){
  this.http.get<Favorites[]>(this.favoritesRoute).subscribe(favorites => {
    this.favorites = favorites;
    console.log('Favorites', this.favorites);
    });
}

  ngOnInit() {
  this.getFavorites();
    
}
}

