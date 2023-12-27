import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url:any;
  responseData: any = [];
  constructor(private http: HttpClient) {}

getMoviesData(){
    return this.http.get(`https://yts.mx/api/v2/list_movies.json`)
  }
}
