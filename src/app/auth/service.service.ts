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

  getMoviesData(paramdata:any){
    return this.http.get(`https://yts.mx/api/v2/list_movies.json`, { params: paramdata });
  }

  getMovieDetails(params:any) {
    return this.http.get(`https://yts.mx/api/v2/movie_details.json`, { params: params});
  }
 
  getSuggestion(movie_id:any) {
    return this.http.get(`https://yts.mx/api/v2/movie_suggestions.json?`, { params: { movie_id: movie_id } })
  }
}
