import { Component, OnInit } from '@angular/core';
import { RacesService } from 'src/services/races.service';
import { Race } from 'src/models/race';

const HORSE_TYPE:string = 'horseracing';
const GREYHOUND_TYPE:string = 'greyhoundracing';
const HARNESS_TYPE:string = 'harnessracing';

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
      .subscribe(
        res => {
          this.races = res;
          this.filteredRaces = this.races;
      },
      err => {
        // TODO: Implement proper error handling from the race service
      });
  }

  private filterRaces(type: number) {
    switch (type) {
      case 1:
        this.filteredRaces = this.races.filter(race => race.icon == HORSE_TYPE);
        break;
      case 2:
        this.filteredRaces = this.races.filter(race => race.icon == GREYHOUND_TYPE);
        break;
      case 3:
        this.filteredRaces = this.races.filter(race => race.icon == HARNESS_TYPE);
        break;
      default:
        this.filteredRaces = this.races;
    }
  }
}
