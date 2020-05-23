import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { PersonDetailComponent } from './address-book/person-detail/person-detail.component';
import { PersonDetailListComponent } from './address-book/person-detail-list/person-detail-list.component';
import { PersonDetailService } from './shared/person-detail.service';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent, NgbdModalComponent } from './address-book/person-detail-list/modal-delete.component';
import { SearchComponent } from './address-book/search.component';
import { PersonSearchType } from './shared/person-detail.model';
import { EditPersonComponent } from './address-book/person-detail-list/modal-edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    PersonDetailComponent,
    PersonDetailListComponent,
    NgbdModalContent,
    NgbdModalComponent,
    SearchComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [PersonDetailService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
