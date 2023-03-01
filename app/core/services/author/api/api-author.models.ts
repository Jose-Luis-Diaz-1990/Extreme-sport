export interface apiAuthor {
    id: string;
    author: sportAuthor;
    avatar: string;
    rol:string;
    createdDate:string;
}

export type sportAuthor = 
"Admin"
|"The King 'JuanK'"
;