import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiAuthor } from './api-author.models';

const BASE_URL = 'https://63ea9d77e57f2ca4eb3e4a01.mockapi.io/extreme-sport/author'

@Injectable({
  providedIn: 'root'
})
export class ApiAuthorService {

  constructor(private http: HttpClient) { }

  public getApiAuthors(): Observable<apiAuthor[]> {
    return this.http.get<apiAuthor[]>(BASE_URL);
  }
}
