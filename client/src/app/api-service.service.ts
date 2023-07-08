import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './interfaces/Data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  public cache: Data[] | null = null;
  constructor(private http: HttpClient) {}

  public getData(): Observable<Data[]> {
    if (this.cache) {
      return of(this.cache);
    }
    const data = this.http.get<Data[]>('http://localhost:3000/leaderboard');
    data.subscribe((d) => (this.cache = d));
    return data;
  }
}
