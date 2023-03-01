import { SportTransform } from './../../../core/services/sports/sport.models';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  // Uso la función transform de la pipe y: 
  // --> En caso de no tener valor devuelvo un array vacio, por el contrario
  // --> Devuelvo el valor filtrado, pasando previaemente el string del usuario a minuscula.
  transform(value: SportTransform[] | null, name: string = ''): SportTransform[] {
    if (!value) {
      return [];
    }
    return value.filter((sport) => {
      return sport.title.toLowerCase().includes(name.toLowerCase());
    });
  }
}
