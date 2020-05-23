export class PersonDetail {
    UserId : number;
    FirstName : string;
    LastName : string;
    Address : string;
    PhoneNumber : string;
}

export enum PersonSearchType {
    FirstName,
    LastName,
    Address,
    PhoneNumber
}
