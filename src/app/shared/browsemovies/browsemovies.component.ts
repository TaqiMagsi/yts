import { Component } from '@angular/core';
import { ServiceService } from 'src/app/auth/service.service';

@Component({
  selector: 'app-browsemovies',
  templateUrl: './browsemovies.component.html',
  styleUrls: ['./browsemovies.component.css']
})
export class BrowsemoviesComponent {
  data2: any;
  search: any;
  qualitySelected: any = "All";
  genre: any = "Action";
  rating: any = "All";
  year: any = "All";
  language: any = 'All';
  order: any = 'Latest';
  p: number = 1;
  quality: any = [
     'All',
    '480p',
     '720p',
     '1080p' ,
     '1080p.x265' ,
     '2160p' ,
  '3D'
  ];
  
  movieGenres: any = ['All','Action', 'Adventure', 'Animation',
    'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy',
    'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction',
    'Thriller', 'War', 'Western'];
  
  movieRatings: any = ['All',9, 8, 7, 6, 5, 4, 3, 2, 1];
 
  movieYear: any = ['All','2023','2022','2020-now','2010-now','2010-2019','2000-2009'];
 
  movieLanguage: any = ['All','English','Foreign','French'];
 
  movieOrder:any=['Latest','Oldest','Featured','Seeds']


  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    
    this.getmovies();
  }

  getmovies() {
    const paramData = `quality=${this.qualitySelected}&genre=${this.genre}&minimum_rating=${this.rating}&sort_by=${this.year}&query_term=${this.search || ' '}`
    let params = {
      genre: "Animation",
      quality: this.qualitySelected,
      minimum_rating: this.rating,
      sort_by: this.year,
      query_term:this.search || ''
    }
    this.serviceService.getMoviesData(params ).subscribe((d: any) => {
      this.data2 = d;

    })
  }

}
