import { Component, OnInit } from '@angular/core';
import { RacesService } from 'src/services/races.service';
import { Race } from 'src/models/race';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'code-challenge-frontend';
  private races: Race[] = [
    // {name: 'Meloburne Cup', venue: 'Melbourne', time: 'Tuesday', icon: 'horse'}
  ];

  private displayedColumns: string[] = ['eventName', 'eventVenue', 'eventTime', 'eventIcon'];

  constructor(private racesService: RacesService) {

  }

  ngOnInit() {
    this.racesService.GetRaces()
      .subscribe(res => {
        this.races = res;
      });
  }
}
