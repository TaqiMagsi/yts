import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
   
  
    data: MovieDetails=
    { name: "Thanks Giving", year: 2003, rating: 7.5, image: "https://img.yts.mx/assets/images/movies/thanksgiving_2023/medium-cover.jpg", genre: "Action/Horror" };

  

}

export interface MovieDetails{
  name: string;
  year: number;
  rating: number;
  image: string;
  genre: string;
}

