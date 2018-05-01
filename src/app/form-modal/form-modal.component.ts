import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import {UsersService} from "../services/users.service"

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,  private formBuilder: FormBuilder, private _userService: UsersService) { 
   this.createForm();
}

  @Input() id: number;
  signUp: FormGroup;

  ngOnInit() {
  	console.log("id >>>>", this.id)
  }

  closeModal() {
  		this.activeModal.close('Modal Closed');
	}

  private createForm(){
  	this.signUp = this.formBuilder.group({
  		firstName: '',
  		lastName: '',
		userName: '',
		password: '',
		dob:'',
		email:''
  	})
  }

  private submitForm() {
  	console.log("this.signUp.value) >>>>>>>>", this.signUp.value);
  	this._userService.createUser(this.signUp.value).subscribe((data:any) => {
  		if(data){
  			console.log("user sucessfully added ...........")
    	this.activeModal.close(this.signUp.value);
  		}
  	},
  	error => {
         console.error("Error saving user!", error);
         // return Observable.throw(error);
       })
  }

}
