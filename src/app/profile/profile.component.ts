/*import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  private User = 'http://localhost:3000/users'; 
  user: User = new User();

  constructor(public userService: UserService) {}

  ngOnInit() {
    // find the profile for the current user based on their token
    this.userService.getProfile().subscribe(user => (this.user = user));
  }
}*/