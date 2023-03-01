import { Author } from './../author/author.model';

export interface SportTransform {
    title: string;
    description: string;
    equipment: string;
    image: string;
    authors: Author;
    id?: string;
}