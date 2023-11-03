import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private apiUrl = 'https://date.nager.at/api/v3/publicholidays/2023/AT';

  constructor(private http : HttpClient) {}

  getData() : Observable<any>
  {
    return this.http.get(this.apiUrl);
  }
}
