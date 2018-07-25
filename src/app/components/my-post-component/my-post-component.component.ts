import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import {UsersService} from '../../services/users.service';

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

  public uploader:FileUploader = new FileUploader({url:'http://localhost:8000/1.0/upload/file'});

  constructor(config: NgbCarouselConfig, private _http: HttpClient, private _userService: UsersService) {
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

  getUserProfile(){
    this._userService.getUserByName().subscribe((data:any) => {
  		if(data){
  			console.log("user sucessfully added ...........", data);
    	// this.activeModal.close(this.signUp.value);
  		}
  	},
  	error => {
         console.error("Error saving user!", error);
         // return Observable.throw(error);
       })
  }

}
