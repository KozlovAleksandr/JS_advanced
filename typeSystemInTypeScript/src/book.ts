import { Author } from './author';
import { Ratingable } from './ratingable';
import { Product } from './product'

export class Book implements Ratingable, Product {
    rating: number | null;
    name: string;
    genre: string;
    price: number;
    author: Author;
    reviews: [string, number, string][] = [];

    getProductDescription(): string {
        return `Book "${this.name}" by ${this.author.firstName} ${this.author.lastName}`
    }

    constructor(
        name: string,
        genre: string,
        price: number,
        author: Author,
        reviews?: [string, number, string][]
    ) {
        this.name = name;
        this.genre = genre;
        this.price = price;
        this.author = author;
        if (reviews) {
            this.reviews = reviews;
        } else {
            reviews = [];
        }
        if (this.reviews.length > 0) {
            const reviewSum = this.reviews.reduce((accumulator, currentValue) => {
                return accumulator + currentValue[1];
            }, 0);
            this.rating = reviewSum / this.reviews.length;
        } else {
            this.rating = null;
        }
    }
}
