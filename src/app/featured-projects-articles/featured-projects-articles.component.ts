import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../models/article';
import { Input } from '@angular/core';
@Component({
  selector: 'app-featured-projects-articles',
  templateUrl: './featured-projects-articles.component.html',
  styleUrls: ['./featured-projects-articles.component.css']
})
export class FeaturedProjectsArticlesComponent implements OnInit {
  articles: Article[];
  @Input() dataPath: string;   
constructor(private http: HttpClient) { }

ngOnInit() {
  this.http.get<Article[]>(this.dataPath).subscribe(articles => {
  this.articles = articles;
  });
}
}
