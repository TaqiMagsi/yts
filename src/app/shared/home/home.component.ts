import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  data: Array<MovieCard> = [
    { name: "Fast 4", year: 2001, releaseDate: "2012-01-30", rating: 4.5, image: "/assets/image/Child.jpg", bio: "Action Movie", genre: "Action, Horror, Comedy" },
    { name: "Download", year: 2001, releaseDate: "2012-01-30", rating: 8.44999, image: "/assets/image/download.jpg", bio: "Action Movie", genre: "Action, Horror, Comedy" },
    { name: "Siberia", year: 2001, releaseDate: "2012-01-30", rating: 7, image: "/assets/image/Siberia.jpg", bio: "Action Movie", genre: "Action, Horror, Comedy" },
    { name: "Yeah", year: 2001, releaseDate: "2012-01-30", rating: 6.2, image: "/assets/image/Yeah baby.jpg", bio: "Action Movie", genre: "Action, Horror, Comedy" },
    { name: "Fast 4", year: 2001, releaseDate: "2012-01-30", rating: 9.1, image: "/assets/image/Child.jpg", bio: "Action Movie", genre: "Action, Horror, Comedy" },
    { name: "Fast 4", year: 2001, releaseDate: "2012-01-30", rating: 8, image: "/assets/image/Child.jpg", bio: "Action Movie", genre: "Action, Horror, Comedy" },
    { name: "Fast 4", year: 2001, releaseDate: "2012-01-30", rating: 8, image: "/assets/image/Child.jpg", bio:"Action Movie", genre:"Action, Horror, Comedy" },
  ]

}


export interface MovieCard{
  name: string;
  year: number;
  releaseDate: string;
  rating: number;
  image: string;
  bio: string;
  genre: string;
}
