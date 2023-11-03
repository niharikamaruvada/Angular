import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  companyName = " ";

  constructor() { }

  getUserDetails()
  {
    return "Accolite";
  }

  setUserDetails(companyName: any)
  {
    this.companyName = companyName;

    console.log(companyName);
  }

  Submit()
  {
    return this.getUserDetails();
  }
}
