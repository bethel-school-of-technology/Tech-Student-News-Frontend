import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/article';

@Component({
  selector: 'app-articlesFavoriteTips',
  templateUrl: './articles-favorite-tips.component.html',
  styleUrls: ['./articles-favorite-tips.component.css']
})
export class ArticlesFavoriteTipsComponent implements OnInit {
    articles: Article[];
    @Input() dataPath: string;   
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Article[]>(this.dataPath).subscribe(articles => {
    this.articles = articles;
    });
}
}