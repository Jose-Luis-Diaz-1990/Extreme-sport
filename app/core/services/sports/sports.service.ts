import { AuthorService } from './../author/author.service';
import { apiSport } from './api/api-sport.models';
import { Observable, map, forkJoin, catchError } from 'rxjs';
import { ApiSportService } from './api/api-sport.service';
import { Injectable } from '@angular/core';
import { SportTransform } from './sport.models';
import { transformSport } from './sports.helpers';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
// Recojo los datos en bruto que traigo del api.
  constructor(
    private apiSportsService: ApiSportService,
    private authorService: AuthorService
    ) { }
// Transformo los datos en la pipe, eliminando el campo autor del modelo de datos y retorno los datos ya filtrados.
  public getSports(): Observable<SportTransform[]>{
    return this.apiSportsService.getApiSports().pipe(
      map((sports: apiSport[]) => {
        return sports.map((sport) => transformSport(sport))
      })
    );
  }

  public getSportDetail(id: string): Observable<SportTransform> {
    return forkJoin([
      this.apiSportsService.getApiSportDetail(id),
      this.authorService.getAuthor().pipe(
        catchError((err) => {
          return [];
        })
      )
    ]).pipe(
      map(([apiSport, authors]) => {
        const selectedAuthor = authors.find((author) => author.author === apiSport.author);
        return transformSport(apiSport, selectedAuthor);
      })
    );
  }

  public deleteProduct(id: string): Observable<SportTransform> {
    return this.apiSportsService.deleteApiSport(id).pipe(
      map((sport) => transformSport(sport))
    )
  }

  public createSport(body: SportTransform): Observable<SportTransform> {
    return this.apiSportsService.createApiSport(body).pipe(
      map((sport) => transformSport(sport))
    );
  }

  public editSport(id: string, body: SportTransform): Observable<SportTransform> {
    return this.apiSportsService.editApiSport(id, body).pipe(
      map((sport) => transformSport(sport))
    );
  }
}
