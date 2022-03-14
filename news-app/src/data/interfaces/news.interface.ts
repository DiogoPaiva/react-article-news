interface IArticleSource {
    id?: string;
    name?: string;
}

export interface  IArticle {
    source?: IArticleSource;
    author?: string;
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: any;
    content?: string; 
    selected?: boolean;
}

export interface INews {
    articles: IArticle[]
}