import { Component, OnInit } from '@angular/core';

import { User }         from '../user';
import { UserService }  from '../user.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { mainUser } from '../mainUser';
import { EventService } from '../event.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private userService:UserService,
  private eventService: EventService,
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit(): void {
    this.getUser();
  }
 
  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user =>  { this.user = user , 
                            console.log('this is the user ' + JSON.stringify(this.user))});
  }

  goBack(): void {
    this.location.back();
  }
 
  followUser(): void {
    const followsId = this.route.snapshot.paramMap.get('id');
    const mainUserId = mainUser._id;
    this.eventService.followUser(mainUserId, followsId).
    subscribe(() => this.goBack());
  }
}
