import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private articleRoute = 'http://localhost:3000/article';
  public article: Article[];

  constructor(private http: HttpClient) {}

  getArticles() {
    this.http.get<Article[]>(this.articleRoute).subscribe(articles => {
      this.article = articles;
      console.log('Articles', this.article);
    });
  }
  ngOnInit() {
    this.getArticles();
  }
}