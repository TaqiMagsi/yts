import { Component } from '@angular/core';
import { ServiceService } from 'src/app/auth/service.service';

@Component({
  selector: 'app-browsemovies',
  templateUrl: './browsemovies.component.html',
  styleUrls: ['./browsemovies.component.css']
})
export class BrowsemoviesComponent {

  constructor(private http: ServiceService) { }
  ngOnInit() {
    this.getData()
  }
  getData() {
    let data = this.http.getdata();
    console.log(data);
  }

}
