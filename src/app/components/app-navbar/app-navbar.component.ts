import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
	logo: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
		this.logo = 'assets/images/d_logo.gif';
  }

    openFormModal() {
	  const modalRef = this.modalService.open(FormModalComponent);
	  modalRef.componentInstance.id = 10; // should be the id
	  
	  modalRef.result.then((result) => {
	    console.log(result);
	  }).catch((error) => {
	    console.log(error);
	  });
	}

}
