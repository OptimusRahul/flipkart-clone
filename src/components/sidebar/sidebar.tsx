import React, { FC, useEffect, useState } from 'react';

import { IProducts, Size } from '../../types/product.types';
import { apiFeatures } from '../../utils/apiFeatures';
import { brandFilter, sizeFilter } from '../../utils/filterData';

import './sidebar.css';

interface Props {
    products: Array<IProducts>,
    renderProductList: Array<IProducts>,
    loading: Boolean,
    setRenderingProductsHandler: Function,
    setLoadingHandler: Function
}

const sizes:Array<Size> = ['S', 'M', 'L', 'XL']

let filterBrands:Array<string> = [];
let filterSizes: Array<Size> = [];

const Sidebar: FC<Props> = ({ products, loading, setRenderingProductsHandler, renderProductList }: Props): JSX.Element => {
    let brands = new Map();

    if(products) {
        products.map(product => {
            const { brand } = product;
            brands.set(brand, brand);
            return brands;
        })        
    }

    const getBrandSpecific: Function = (brand: string) => {
        if(!filterBrands.includes(brand)) {
            filterBrands.push(brand);
        } else {
            filterBrands.splice(filterBrands.indexOf(brand),1);
        }

        console.log(sizeFilter(renderProductList, filterSizes));
        setRenderingProductsHandler(brandFilter(renderProductList, filterBrands))
    }

    const getSizeSizeSpecific: Function = (size: Size) => {
        if(!filterSizes.includes(size)) {
            filterSizes.push(size);
        } else {
            filterSizes.splice(filterSizes.indexOf(size),1);
        }
        console.log(sizeFilter(renderProductList, filterSizes))
        setRenderingProductsHandler(sizeFilter(renderProductList, filterSizes))        
    }

    function renderList(product: Array<string>, name: string, callbackFn: Function) {
        return product.map((productSpecification, index) => {
            return (
                <li key={index}> 
                    <label>
                        <input type="checkbox" name={name} onClick={() => callbackFn(productSpecification)}/>
                        {productSpecification}
                    </label>
                </li>
            )
        })
    }

    return (
        <div className="sidebar">
            <div className="sidebar--header">
                <h2 className="sidebar--header__heading"> Filters </h2>
                <button > Clear Filters </button>
            </div>
            <div className="sidebar--filter__brands">
                <h3 className="sidebar--filter--brands__headings"> Brands </h3>
                {
                    loading ? 
                        <p> Loading... </p> : 
                        <ul> {renderList([...brands.values()], 'brands', getBrandSpecific)} </ul>
                }
            </div>
            <div className="sidebar--filter__sizes">
                <h3 className="sidebar--filter--sizes__heading"> Sizes </h3>
                {
                    loading ? 
                        <p> Loading... </p> : 
                        <ul> {renderList(sizes, 'sizes', getSizeSizeSpecific)} </ul>
                }
            </div>
        </div>
    );
}

export default Sidebar;