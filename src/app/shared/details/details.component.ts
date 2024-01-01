import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/auth/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  movie_id: any;
  data2: any;
  suggestions: any;
  constructor(private serviceService: ServiceService, private router: ActivatedRoute,private route:Router) {
    this.router.params.subscribe(params => {
      this.movie_id = params['id'];
      this.getSuggestions(this.movie_id)
    });
  }

  ngOnInit() {  
    this.getmoviesDetails();
  }

  getmoviesDetails() {
    let params = {
      with_images: true,
      with_cast: true,
      movie_id: this.movie_id,
    }
    this.serviceService.getMovieDetails(params).subscribe((d: any) => {
      this.data2 = d;
      
    })
  }     
  getSuggestions(id?:any) {
    
    this.movie_id = id;
    this.serviceService.getSuggestion(this.movie_id).subscribe((d: any) => {
      this.suggestions = d;
      console.log(this.suggestions);
    });
    this.getmoviesDetails();

      }
}

export interface MovieDetails{
  name: string;
  year: number;
  rating: number;
  image: string;
  genre: string;
}

