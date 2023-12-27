import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url:any;
  constructor(public http: HttpClient) {
    this.url = "https://yts.mx/api/v2/list_movies.json";
  }
  getdata() {
    
     return this.http.get(this.url);
    
  }

}
