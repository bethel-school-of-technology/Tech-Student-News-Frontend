import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Article} from '../models/article';

@Component({
  selector: 'app-favorites-tips-articles',
  templateUrl: './favorites-tips-articles.component.html',
  styleUrls: ['./favorites-tips-articles.component.css']
})

export class FavoritesTipsArticlesComponent implements OnInit {
    articles: Article[];
    @Input() dataPath: string;   
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Article[]>(this.dataPath).subscribe(articles => {
    this.articles = articles;
    });
}
}

