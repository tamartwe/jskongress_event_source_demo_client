import { Component, OnInit , Input } from '@angular/core';     
import { Twitt } from '../twitt';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { TwittService }  from '../twitt.service';
import { mainUser } from '../mainUser';
 

@Component({
  selector: 'app-twitt-detail',
  templateUrl: './twitt-detail.component.html',
  styleUrls: ['./twitt-detail.component.css']
})
export class TwittDetailComponent implements OnInit {

  @Input() twitt: Twitt;


  constructor( private route: ActivatedRoute,
    private twittService: TwittService,
    private location: Location) { }

    ngOnInit(): void {
      this.getTwitt();
    }
   
    getTwitt(): void {
      const text = this.route.snapshot.paramMap.get('text');
      this.twittService.getTwitt(mainUser._id, text)
        .subscribe(twitt => this.twitt = twitt);
    }
   
    goBack(): void {
      this.location.back();
    }

}
