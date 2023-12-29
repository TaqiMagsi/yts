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
  qualityselected: any;
  
  
  quality: any = [
     'All',
    '480p',
     '720p',
     '1080p' ,
     '1080p.x265' ,
     '2160p' ,
  '3D'
  ];
  


  constructor(private serviceService: ServiceService) {
  }

  ngOnInit() {
    
    this.getmovies();
     this.getmoviesbyquality(); 
  }

  getmovies() {
    this.serviceService.getMoviesData(this.search this.qualityselected || " " ).subscribe((d: any) => {
      this.data2 = d;

    })
  }
  getmoviesbyquality() {
    debugger
    this.serviceService.getMoviesbyQuality(this.qualityselected || " ").subscribe((d: any) => {
      this.data2 = d;
    })
  }
}
