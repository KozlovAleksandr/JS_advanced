import { Ratingable } from './ratingable';
import { Product } from './product'

export function showCart(products: Product[]) { 
    let totalPrice = 0 
    products.forEach((product) => {
        totalPrice += product.price
        // eslint-disable-next-line no-undef
        console.log(`${product.getProductDescription()} x ${product.price} rub.`) 
    })
    // eslint-disable-next-line no-undef
    console.log(`\nTotal items: ${products.length}, total cost: ${totalPrice}`) }

export function showRating(entity: Ratingable) {
    if (entity.rating == null) {
        return 'not rated yet';
    }
    const roundedRating = Math.round(entity.rating);
    let rating = '';
    for (let i = 0; i < roundedRating; i++) {
        rating += '⭐';
    }
    return rating + ` (${entity.rating.toFixed(2)})`;
}
