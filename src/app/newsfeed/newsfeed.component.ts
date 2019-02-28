import { Component, OnInit } from '@angular/core';
import { Twitt } from '../twitt';
import { TwittService } from '../twitt.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  twitts :Twitt[];
  
  constructor(private twittService: TwittService) { }
 
  ngOnInit() {
    this.getTwitts();
  }
 
  getTwitts(): void {
    this.twittService.getTwitts()
    .subscribe(twitts => this.twitts = twitts);
  }
  
}
