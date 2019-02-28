import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FollowingService } from '../following.service';
import { mainUser } from '../mainUser';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  selectedUser: User;
 
  users: User[];
 
  constructor(private followingService: FollowingService) { }
 
  ngOnInit() {
    this.getFollowing();
  }
 
  onSelect(user: User): void {
    this.selectedUser = user;
  }
 
  getFollowing(): void {
    this.followingService.getFollowing(mainUser._id)
        .subscribe(users => this.users = users);
  }

}
