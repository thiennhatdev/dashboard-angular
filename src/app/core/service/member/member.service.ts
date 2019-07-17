import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public API : string = "http://5d21be752ba8cf0014c44bf5.mockapi.io/dashboard";
  
  constructor(
    public http : HttpClient
  ) { }

    getUser() : Observable<any> {
      return this.http.get(this.API);
    }
    
  }
