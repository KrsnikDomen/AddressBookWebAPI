import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonDetailService } from 'src/app/shared/person-detail.service';

@Component({
  selector: 'ngbd-modal-edit-content',
  templateUrl: './modal-edit-user.content.html'
})

export class EditPersonContent {
  userId: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string

  constructor(public modal: NgbActiveModal, public service: PersonDetailService) {}

  ngOnInit(): void {
    this.userId = this.service.formData.UserId;
    this.firstName = this.service.formData.FirstName;
  }
}

@Component({
  selector: 'ngbd-modal-edit-component',
  templateUrl: "./modal-edit-user.component.html"
})
export class EditPersonComponent {
  @Input()
  userId: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string

  constructor(private modalService: NgbModal, public service: PersonDetailService) {}

  // Tried to communicate through service and properties
  open(userId: number, firstName: string, lastName: string, address: string, phoneNumber: string) {
    const modalRef = this.modalService.open(EditPersonContent);
    modalRef.componentInstance.userId = userId;
    modalRef.componentInstance.firstName = firstName;
    modalRef.componentInstance.lastName = lastName;
    modalRef.componentInstance.address = address;
    modalRef.componentInstance.phoneNumber = phoneNumber;
    this.service.formData.UserId = userId;
    this.service.formData.FirstName = firstName;
    this.service.formData.LastName = lastName;
    this.service.formData.Address = address;
    this.service.formData.PhoneNumber = phoneNumber;
  }
}