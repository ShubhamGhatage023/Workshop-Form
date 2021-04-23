import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollDataService {

  constructor(private http : HttpClient) { }

  public url=`http://localhost:7000/enrollData`;

  enrollData(Employee){
    return this.http.post<any>(this.url,Employee);
  }

}
