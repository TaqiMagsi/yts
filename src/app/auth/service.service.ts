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

  getMoviesData(search:any,quality:any){
    return this.http.get(`https://yts.mx/api/v2/list_movies.json?query_term=${search}&quality=${quality}`)
  }
  getMoviesbyQuality(quality: any) {
   
    return this.http.get(`https://yts.mx/api/v2/list_movies.json?query_term=${quality}`)
  }
  getMovieDetails(movie_id:any) {
    return this.http.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`);
  }

}
