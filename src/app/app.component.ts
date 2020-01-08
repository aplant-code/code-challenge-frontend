import { Component, OnInit } from '@angular/core';
import { RacesService } from 'src/services/races.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'code-challenge-frontend';

  constructor(private racesService: RacesService) {

  }

  ngOnInit() {
    this.racesService.GetRaces();
  }
}
