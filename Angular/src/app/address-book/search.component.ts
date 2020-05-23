import { Component, OnInit } from '@angular/core';
import { PersonDetailService } from '../shared/person-detail.service';
import { PersonSearchType } from '../shared/person-detail.model';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

  constructor(public service: PersonDetailService) {
  }

  ngOnInit(): void {
  }

  searchPerson(searchType: PersonSearchType, value: string) {
    let searchUrl: string = this.service.rootURL + "/People";

    switch(searchType) {
      case PersonSearchType.FirstName: {
        searchUrl += "/firstname/" + value;
        break;
      }
      case PersonSearchType.LastName: {
        searchUrl += "/lastname/" + value;
        break;
      }
      case PersonSearchType.Address: {
        searchUrl += "/address/" + value;
        break;
      }
      case PersonSearchType.PhoneNumber: {
        searchUrl += "/phonenumber/" + value;
        break;
      }
    }
    this.service.refreshList(searchUrl);
  }
}
