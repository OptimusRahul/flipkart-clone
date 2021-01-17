import { getData } from '../api';

import { IProducts, features } from '../types/product.types';

const productsAPIData: Array<IProducts> = getData();

export const apiFeatures:Function = (feature: features = 'default'): Array<{}> => {
    const tranformedArray = productsAPIData;
    switch(feature) {
        case 'High':
            return tranformedArray.sort((a, b) => +b.price - +a.price);
        case 'Low':
            return tranformedArray.sort((a, b) => +a.price - +b.price);
        default:
            return productsAPIData;
    }
}

