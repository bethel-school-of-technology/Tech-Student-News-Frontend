import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  words =[];
  filteredWords = this.words;

  term = "";

  doSearch() {
    this.filteredWords = this.words.filter(s =>
      s.toLowerCase().includes(this.term.toLowerCase())
    );
  }

  resetSearch() {
    this.term = "";
    this.filteredWords = this.words;
  }

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.validateToken().subscribe(response => {
      console.log(response);
      this.userService.loggedIn = response;
    });
  }
}