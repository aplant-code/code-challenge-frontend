import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { filter, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Race } from 'src/models/race';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private http: HttpClient) { }

  public GetRaces(): Observable<Race[]> {
    return this.http.get("https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump")
      .pipe(
        map((data) => {
          var races: Race[] = [];

          for (let i =0; i < data['result'].length; i++) {
            let raceJson = data['result'][i];
            let race = new Race();
            race.name = raceJson['EventName'];
            race.venue = raceJson['Venue']['Venue'];
            race.time = raceJson['AdvertisedStartTime'];
            race.icon = raceJson['EventType']['Slug'].replace("-", "");

            races.push(race);
          }

          return races;
        }),
        catchError(this.handleError)
      )
  }

  private handleError(errorResponse: HttpErrorResponse) {
    return throwError("An error occurred while sending the request to the server");
  }
}
