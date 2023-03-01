import { sportAuthor } from './api/api-author.models';

export interface Author {
    id?: string;
    author: sportAuthor;
    avatar?: string;
    rol?:string;  
}