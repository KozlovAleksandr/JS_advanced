import { Book } from './book'
import { showRating } from './helpers'
import { showCart } from './helpers'
import { Product } from './product'

const book = new Book(
    'Harry Potter',
    'fantasy', 980,
    {firstName: 'J. K.', lastName: 'Rowling', rating: 4.6}
)

const notepad: Product = { 
    price: 40, getProductDescription: () => {
        return 'Notepad with Unicorn, 50 pages' 
    }
}

showCart([book, notepad])