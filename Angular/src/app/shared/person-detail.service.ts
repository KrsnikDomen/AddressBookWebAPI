import { Injectable } from '@angular/core';
import { PersonDetail, PersonSearchType } from './person-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonDetailService {
  formData: PersonDetail
  readonly rootURL = "https://localhost:5001/api";
  list: PersonDetail[];
  searchType: PersonSearchType[];

  constructor(private http: HttpClient) { }

  postPeople() {
    return this.http.post(this.rootURL + "/People", this.formData);
  }

  putPeople() {
    return this.http.put(this.rootURL + "/People/" + this.formData.UserId, this.formData);
  }

  deletePeople(id: number) {
    return this.http.delete(this.rootURL + "/People/" + id);
  }

  // General GET and search
  refreshList(searchUrlParam?: string): void {
    let searchUrl: string;

    if (searchUrlParam == null){
      searchUrl = this.rootURL + "/People";
    }
    
    this.http.get(searchUrl)
      .toPromise()
      .then(res => this.list = res as PersonDetail[]);
  }

  // searchPerson(searchType: PersonSearchType, value: string) {
  //   let searchUrl: string = this.rootURL + "/People";
  //   switch(searchType) {
  //     case PersonSearchType.FirstName: {
  //       searchUrl += "/firstname/" + value;
  //       break;
  //     }
  //     case PersonSearchType.LastName: {
  //       searchUrl += "/lastname/" + value;
  //       break;
  //     }
  //     case PersonSearchType.Address: {
  //       searchUrl += "/address/" + value;
  //       break;
  //     }
  //     case PersonSearchType.PhoneNumber: {
  //       searchUrl += "/phonenumber/" + value;
  //       break;
  //     }
  //   }

  //   this.http.get(searchUrl)
  //     .toPromise()
  //     .then(res => this.list = res as PersonDetail[]);
  // }
}
