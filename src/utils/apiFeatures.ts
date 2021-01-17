import { IProducts, features } from '../types/product.types';

export const apiFeatures:Function = (products: Array<IProducts>, feature: features = 'default'): Array<{}> => {
    const newProducts = [...products]
    switch(feature) {
        case 'High':
            return newProducts.sort((a, b) => +b.price - +a.price);
        case 'Low':
            return newProducts.sort((a, b) => +a.price - +b.price);
        default:
            return newProducts;
    }
}

