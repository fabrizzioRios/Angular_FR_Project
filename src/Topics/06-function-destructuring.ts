
export interface Product {
    description: string;
    price: number;
}

export interface Troduct {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad',
    price: 250.0
}

interface TaxCalculationsOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation( options: TaxCalculationsOptions ): [number, number] {
export function taxCalculation( options: TaxCalculationsOptions ): [number, number] {
    const { tax, products } = options;
    let total = 0;
    products.forEach( ({ price })=> {
        total += price;
    } )
    return [total, total * tax]
}
// function taxCalculation({tax, products}: TaxCalculationsOptions ): [number, number] {
//     let total = 0;
//     products.forEach( ({ price })=> {
//         total += price;
//     } )
//     return [total, total * tax]
// }



const shoppingCart = [phone, tablet];
const tax = 0.15;

const [result, taxResult]: number[] = taxCalculation({
    products: shoppingCart,
    tax,
});

console.log('Total:', result)
console.log('Total:', taxResult)
