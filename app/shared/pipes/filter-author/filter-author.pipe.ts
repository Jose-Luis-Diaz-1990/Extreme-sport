import { apiSport } from 'src/app/core/services/sports/api/api-sport.models';
import { sportAuthor } from './../../../core/services/author/api/api-author.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAuthor',
  pure: true
})
export class FilterAuthorPipe implements PipeTransform {

  transform(value: apiSport[] | null, author?: sportAuthor): apiSport[] {
    if (!value) { return []; }
    if (!author) { return value; }
    return value.filter((sport) => {
      return sport.author === author || !author;
    });
  }
}
