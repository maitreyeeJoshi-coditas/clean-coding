export interface INews {
    id: number;
    headline: string;
    article: string;
    categoryId: number;
    publicationInfo: {
        publisher: string,
        datePublished: string
    }
}