import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Article} from '../models/article';

@Component({
  selector: 'app-favorites-tips-articles',
  templateUrl: './favorites-tips-articles.component.html',
  styleUrls: ['./favorites-tips-articles.component.css']
})

export class FavoritesTipsArticlesComponent implements OnInit {
  private articlesRoute = 'http://localhost:3000/favorites-tips-articles';  
  public articles: Article[];
    @Input() dataPath: string;   
  constructor(private http: HttpClient) { }
getArticles(){
  this.http.get<Article[]>(this.articlesRoute).subscribe(articles => {
    this.articles = articles;
    console.log('Article', this.articles);
    });
}

  ngOnInit() {
  this.getArticles();
    
}
}

