export interface IRecipe {
    type: string;
    title: string;
    servingSize: number;
    readyTime: number;
    difficulyRating: number;
    starRating: number;
    imageURL: string;
    ingredients: string;
    directions: string;
}