import { Component } from '@angular/core';
import { ServiceService } from 'src/app/auth/service.service';

@Component({
  selector: 'app-browsemovies',
  templateUrl: './browsemovies.component.html',
  styleUrls: ['./browsemovies.component.css']
})
export class BrowsemoviesComponent {
  data: any = [];
  constructor(private serviceService: ServiceService) {
    
  }
  
  ngOnInit() {
    this.getmovies();
  }

  getmovies() {
    this.serviceService.getMoviesData().subscribe((d: any) => {
      this.data = d;
       
    })
  }
    
}
