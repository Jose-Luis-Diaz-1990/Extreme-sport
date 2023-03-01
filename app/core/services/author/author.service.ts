import { ApiAuthorService } from './api/api-author.service';
import { Observable, map } from 'rxjs';
import { apiAuthor } from './api/api-author.models';
import { Injectable } from '@angular/core';
import { Author } from './author.model';


@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private apiAuthorService: ApiAuthorService) {}

  public getAuthor(): Observable<Author[]> {
    return this.apiAuthorService.getApiAuthors().pipe(
      map((apiAuthor: apiAuthor[]) => {
        return apiAuthor.map((apiAuthor) => ({
          id: apiAuthor.id,
          author: apiAuthor.author,
          avatar: apiAuthor.avatar,
          rol: apiAuthor.rol,
        }));
      })
    );
  }
}
