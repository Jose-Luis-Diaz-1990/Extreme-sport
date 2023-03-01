import { SportTransform } from './sport.models';
import { apiSport } from './api/api-sport.models';
import { Author } from './../author/author.model';


export function transformSport(apiSport: apiSport, selectedAuthor?: Author): SportTransform {
    delete apiSport.createdDate;
    return {
        ...apiSport,
        authors: selectedAuthor 
            ? selectedAuthor 
            : { author: apiSport.author }
    }
}