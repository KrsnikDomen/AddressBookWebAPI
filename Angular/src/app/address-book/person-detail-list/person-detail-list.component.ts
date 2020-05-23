import { Component, OnInit } from '@angular/core';
import { PersonDetailService } from 'src/app/shared/person-detail.service';
import { PersonDetail } from 'src/app/shared/person-detail.model';


@Component({
  selector: 'app-person-detail-list',
  templateUrl: './person-detail-list.component.html',
  styleUrls: []
})
export class PersonDetailListComponent implements OnInit {

  constructor(public service: PersonDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  //populateForm(pd: PersonDetail) {
    populateForm(id: number, firstName: string, lastName: string, address: string, phoneNum: string) {
    
    this.service.formData.UserId = id;
    this.service.formData.FirstName = firstName;
    this.service.formData.LastName = lastName;
    this.service.formData.Address = address;
    this.service.formData.PhoneNumber = phoneNum;
    // this.service.formData.Address = pd.Address;    DOES NOT WORK
    // this.service.formData = pd;                    DOES NOT WORK
  }
}
