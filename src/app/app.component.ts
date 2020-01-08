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
  private races: Race[] = [];
  private filteredRaces: Race[] = [];

  private displayedColumns: string[] = ['eventIcon', 'eventTitle', 'eventTime'];

  constructor(private racesService: RacesService) {

  }

  ngOnInit() {
    this.racesService.GetRaces()
      .subscribe(res => {
        this.races = res;
        this.filteredRaces = this.races;
      });
  }

  private filterRaces(type: number) {
    switch (type) {
      case 1:
        this.filteredRaces = this.races.filter(race => race.icon == "horseracing");
        break;
      case 2:
        this.filteredRaces = this.races.filter(race => race.icon == "greyhoundracing");
        break;
      case 3:
        this.filteredRaces = this.races.filter(race => race.icon == "harnessracing");
        break;
      default:
        this.filteredRaces = this.races;
    }
  }
}
