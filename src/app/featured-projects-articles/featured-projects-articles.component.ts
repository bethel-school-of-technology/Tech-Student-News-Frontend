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
  private articleRoute = 'http://localhost:3000/article';  
  public articles: Article[];
    @Input() dataPath: string;   
  constructor(private http: HttpClient) { }
getArticles(){
  this.http.get<Article[]>(this.articleRoute).subscribe(articles => {
    this.articles = articles;
    console.log('Article', this.articles);
    });
  }

  ngOnInit() {
  this.getArticles();
    
}
}