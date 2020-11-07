import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Projects} from '../models/projects';
import { Input } from '@angular/core';
@Component({
  selector: 'app-featured-projects-articles',
  templateUrl: './featured-projects-articles.component.html',
  styleUrls: ['./featured-projects-articles.component.css']
})
export class FeaturedProjectsArticlesComponent implements OnInit {
  private projectsRoute = 'http://localhost:3000/projects';  
  public projects: Projects[];
    @Input() dataPath: string;   
  constructor(private http: HttpClient) { }
getProjects(){
  this.http.get<Projects[]>(this.projectsRoute).subscribe(projects => {
    this.projects = projects;
    console.log('Projects', this.projects);
    });
  }

  ngOnInit() {
  this.getProjects();
    
}
}