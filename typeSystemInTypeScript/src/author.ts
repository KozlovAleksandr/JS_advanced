import { Ratingable } from './ratingable';

export interface Author extends Ratingable {
  firstName: string;
  lastName: string;
}
