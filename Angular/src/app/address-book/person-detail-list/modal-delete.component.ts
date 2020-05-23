import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonDetailService } from 'src/app/shared/person-detail.service';
import { PersonDetail } from 'src/app/shared/person-detail.model';

@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
  <h4 class="modal-title" id="modal-title">Profile deletion</h4>
  <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
    <span>&times;</span>
  </button>
</div>
<div class="modal-body">
  <p><strong>Are you sure you want to delete this person from address book?</strong></p>
  <p>
  <span class="text-danger">This operation can not be undone.</span>
  </p>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
  <button type="button" ngbAutofocus class="btn btn-danger" (click)="onDelete(userId); modal.dismiss('person deleted');">Delete</button>
</div>
  `
})
export class NgbdModalContent {
  @Input()
  userId: number;

  constructor(public modal: NgbActiveModal, public service: PersonDetailService) {}

  onDelete(UserId: number) {
    this.service.deletePeople(UserId)
      .subscribe(
        res => {
          this.service.refreshList();
        },
        err => {
          console.log(err);
        })
  }
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: "./modal-delete.component.html"
})
export class NgbdModalComponent {
  @Input()
  userId: number;

  constructor(private modalService: NgbModal, private service: PersonDetailService) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.userId = this.userId;
  }
}