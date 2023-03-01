import { sportAuthor } from './../../author/api/api-author.models';

export interface apiSport {
    authors: any;
    title: string;
    description: string;
    equipment: string;
    image: string;
    author: sportAuthor;
    id: string;
    createdDate?: string;
}