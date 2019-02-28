import { Component, OnInit , Input } from '@angular/core';     
import { Twitt } from '../twitt';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { TwittService }  from '../twitt.service';
 

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
      const id = +this.route.snapshot.paramMap.get('id');
      this.twittService.getTwitt(id)
        .subscribe(twitt => this.twitt = twitt);
    }
   
    goBack(): void {
      this.location.back();
    }

}
