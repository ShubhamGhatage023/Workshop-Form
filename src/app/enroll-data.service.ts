import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Participant } from './participant';

@Injectable({
  providedIn: 'root'
})
export class EnrollDataService {

  constructor(private http : HttpClient) { }

  public url=`http://localhost:7000/enrollData`;

  enrollData(part : Participant){
    return this.http.post<any>(this.url,part);
  }

}
