import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-post-component',
  templateUrl: './my-post-component.component.html',
  styleUrls: ['./my-post-component.component.css'],
  providers: [NgbCarouselConfig]
})
export class MyPostComponentComponent implements OnInit {
  img1: any;
  img2: any;
  img3: any;

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
   }

  ngOnInit() {
     this.img1 = 'assets/images/img1.jpeg';
     this.img2 = 'assets/images/img2.jpg';
     this.img3 = 'assets/images/img3.jpg';
  }

}
