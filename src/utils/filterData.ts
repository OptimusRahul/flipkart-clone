import { Gender, IProducts, Size } from '../types/product.types';

export const brandFilter: Function = (products: Array<IProducts>, specifications:Array<string>):Array<IProducts> => {
    let map = new Map();
    if(specifications.length > 0) {
        products.filter((product: IProducts) => {
            return specifications.map((specification) => {
                if(product["brand"] !== undefined) {
                    if(specification === product["brand"]) {
                        map.set(product.id, product);
                    }
                }
                return map;
            })
        });
        return [...map.values()];
    }
    return products;
}

export const sizeFilter: Function = (products: Array<IProducts>, specifications:Array<Size>):Array<IProducts> => {
    let map =  new Map();
    if(specifications.length > 0) {
        products.filter((product: IProducts) => {
            return specifications.map((specification: Size) => {
                if(product["size"] !== undefined) {
                    if(product["size"].includes(specification)) {
                        map.set(product.id, product);
                    }
                }
                return map;
            });
        });
        return [...map.values()];
    }
    return products;
}

export const genderFilter: Function = (products: Array<IProducts>, type:Array<Gender>):Array<IProducts> => {
    let map = new Map();
    if(type.length > 0) {
        products.filter(product => {
            return type.map(type => {
                if(product["gender"].includes(type)) {
                    map.set(product.id, product);
                }
                return map; 
            })
        })
        return [...map.values()];
    }
    return products;
}