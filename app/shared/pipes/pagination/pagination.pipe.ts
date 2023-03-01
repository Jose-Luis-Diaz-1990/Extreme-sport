import { SportTransform } from './../../../core/services/sports/sport.models';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pagination',
  pure: true
})
export class PaginationPipe implements PipeTransform {
// Uso la función transform de la pipe y le paso el atributo page por defecto a 0, el valor se modificara con las funciones de paginación siguiente o anterior.
  transform(value: SportTransform[], page: number = 0): SportTransform[] {
    return value.slice(page, page + 10);
  }

}
