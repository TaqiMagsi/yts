import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/auth/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  search: any='';
  data2: any[]=[];
  notFound = false;
  searchshow: any = false;
   
  constructor(private serviceService: ServiceService,private router:Router) { }

  ngOnInit() {

    this.getmovies();
  } 



  getmovies() {
    if (!this.search) {
      this.data2 = [];
      this.notFound = false;
      return;
    }

    let params = {
      genre: "Animation",
      query_term: this.search || '',
      limit: 5
    };

    this.serviceService.getMoviesData(params).subscribe({
      next: (d: any) => {
        console.log(d);
        this.data2 = d.data.movies;
        // this.notFound = this.data2.length === 0;
        // console.log(this.data2);
      },
      error: (err: any) => {
        // this.notFound = false;
        console.log(err);
      }
    });
  }

}
