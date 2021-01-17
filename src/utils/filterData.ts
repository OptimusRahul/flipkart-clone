import { IProducts, Size } from '../types/product.types';

export const brandFilter: Function = (products: Array<IProducts>, specifications:Array<string>):Array<IProducts> => {
    const filtered: Array<IProducts> = [];
    if(specifications.length > 0) {
        products.map(product => {
            return specifications.map(specification => {
                if(product["brand"] === specification) {
                    filtered.push(product);
                }

                return filtered;
            })
        })

        console.log(filtered);
        return filtered;
    }
    return products;
}

export const sizeFilter: Function = (products: Array<IProducts>, specifications:Array<Size>):Array<IProducts> => {
    const filtered: Array<IProducts> = [];
    let map =  new Map();
    console.log(specifications);
    if(specifications.length > 0) {
        products.filter((product: IProducts) => {
            return specifications.map((specification: Size) => {
                if(product["size"] !== undefined) {
                    if(product["size"].includes(specification)) {
                        filtered.push(product);
                        map.set(product.id, product.brand);
                    } else  {
                        map.delete(product.id);
                    }
                }
                return filtered;
            });
        });
        return [...map.values()];
    }
    return products;
}