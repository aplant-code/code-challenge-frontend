import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private http: HttpClient) { }

  public GetRaces() {
    this.http.get("https://s3-ap-southeast-2.amazonaws.com/bet-easy-code-challenge/next-to-jump")
      .subscribe(res => {
        console.log(res)
      });
  }
}
