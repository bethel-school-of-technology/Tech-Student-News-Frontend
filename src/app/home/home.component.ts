import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Favorites } from '../models/favorites';
import {Projects} from '../models/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private favoritesRoute = 'http://localhost:3000/favorites';
  private projectsRoute =  'http://localhost:3000/projects';
  public favorites: Favorites[];
  public projects: Projects[];

  constructor(private http: HttpClient) {}

  getFavorites() {
    this.http.get<Favorites[]>(this.favoritesRoute).subscribe(favorites => {
      this.favorites = favorites;
      console.log('Favorites', this.favorites);
    });
  }
  getProjects() {
    this.http.get<Projects[]>(this.projectsRoute).subscribe(projects => {
      this.projects = projects;
      console.log('Projects', this.projects);
    });
  }
  ngOnInit() {
    this.getFavorites();
    this.getProjects();
  }
}