import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/auth/service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  movie_id: any;
  data2: any;
  constructor(private serviceService: ServiceService, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.movie_id = params['id'];
      console.log('Test ID:', this.movie_id);
    });
  }

  ngOnInit() {  
    this.getmoviesDetails();
  }

  getmoviesDetails() {
    this.serviceService.getMovieDetails(this.movie_id).subscribe((d: any) => {
      this.data2 = d;
      console.log(this.data2)
    })
  }     
}

export interface MovieDetails{
  name: string;
  year: number;
  rating: number;
  image: string;
  genre: string;
}

