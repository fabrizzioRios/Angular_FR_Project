import { Product, taxCalculation } from './06-function-destructuring.ts'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 250
    },
];

const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax: 0.15 });

console.log('Total: ', total);
console.log('Tax: ', taxTotal);