import { Component, OnInit } from '@angular/core';
import { PersonDetailService } from 'src/app/shared/person-detail.service';
import { NgForm } from '@angular/forms';
import { PersonDetail } from 'src/app/shared/person-detail.model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: []
})
export class PersonDetailComponent implements OnInit {

  constructor(public service: PersonDetailService) { }

  ngOnInit(): void {
    this.resetAddressBookForm();
  }

  resetAddressBookForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }

    this.service.formData = {
      UserId: 0,
      FirstName: "",
      LastName: "",
      Address: "",
      PhoneNumber: ""
    }
  }

  isDataValid(data: PersonDetail): boolean {
    if (data.UserId != null && data.FirstName != null && data.LastName != null && data.Address != null && data.PhoneNumber != null) {
      return true;
    }
    return false;
  }

  onSubmit(form: NgForm)
  {
    if (this.service.formData.UserId == 0 && this.isDataValid(this.service.formData))
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm)
  {
    this.service.postPeople().subscribe(
      res => {
        this.resetAddressBookForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm)
  {
    this.service.putPeople().subscribe(
      res => {
        this.resetAddressBookForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
