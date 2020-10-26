import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../models/article';

@Component({
  selector: 'app-articlesFeatureProject',
  templateUrl: './articles-feature-project.component.html',
  styleUrls: ['./articles-feature-project.component.css']
})
export class ArticlesFeatureProjectComponent implements OnInit {
    articles: Article[];
    @Input() dataPath: string;   
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Article[]>(this.dataPath).subscribe(articles => {
    this.articles = articles;
    });
}
}