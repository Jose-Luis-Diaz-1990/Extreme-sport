import { SportTransform } from './../sport.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiSport } from './api-sport.models';
import { Observable } from 'rxjs';

const API_SPORT_URL = 'https://63ea9d77e57f2ca4eb3e4a01.mockapi.io/extreme-sport';

@Injectable({
  providedIn: 'root'
})
export class ApiSportService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiSports(): Observable<apiSport[]>{
    return this.http.get<apiSport[]>(`${API_SPORT_URL}/sport`);
  }

  public getApiSportDetail(id: string): Observable<apiSport> {
    return this.http.get<apiSport>(`${API_SPORT_URL}/sport/${id}`);
  }

  public deleteApiSport(id: string): Observable<apiSport>{
    return this.http.delete<apiSport>(`${API_SPORT_URL}/sport/${id}`);
  }

  public createApiSport(body: SportTransform) {
    return this.http.post<apiSport>(`${API_SPORT_URL}/sport`, body);
  }

  public editApiSport(id: string, body: SportTransform) {
    return this.http.put<apiSport>(`${API_SPORT_URL}/sport/${id}`, body);
  }

}
