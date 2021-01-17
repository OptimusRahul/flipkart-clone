import React, { FC, useState } from 'react';

import { IProducts, Size, Gender } from '../../types/product.types';
import { brandFilter, sizeFilter, genderFilter } from '../../utils/filterData';

import './sidebar.css';

interface Props {
    products: Array<IProducts>,
    renderProductList: Array<IProducts>,
    loading: Boolean,
    setRenderingProductsHandler: Function,
    setLoadingHandler: Function
}

const sizes:Array<Size> = ['S', 'M', 'L', 'XL']
const gender: Array<Gender> = ['Male', 'Female']

let filterBrands:Array<string> = [];
let filterSizes: Array<Size> = [];
let filterGender: Array<Gender> = [];

const Sidebar: FC<Props> = ({ products, loading, setRenderingProductsHandler, renderProductList }: Props): JSX.Element => {
    const [ check, setCheck ] = useState<Boolean>();

    let brands = new Map();

    if(products) {
        products.map(product => {
            const { brand } = product;
            brands.set(brand, brand);
            return brands;
        })        
    }

    const setClearHandler = () => {
        filterBrands = [];
        filterSizes = [];
        filterGender = [];
        setRenderingProductsHandler(products);
    }

    const setCheckedHandler = (name: any) => {
        if(filterBrands.includes(name) || filterSizes.includes(name) || filterGender.includes(name)) {
            return true;
        }
        return false;
    }

    const getBrandSpecific: Function = (brand: string) => {
        if(!filterBrands.includes(brand)) {
            filterBrands.push(brand);
        } else {
            filterBrands.splice(filterBrands.indexOf(brand),1);
        }

        let filterData;
        if(filterBrands.length > 0) {
            filterData = brandFilter(products, filterBrands);
            if(filterSizes.length > 0) {
                filterData = sizeFilter(filterData, filterSizes);
            }
            if(filterGender.length > 0) {
                filterData = genderFilter(filterData, filterGender);
            }
            setRenderingProductsHandler(filterData)
        } else {
            setRenderingProductsHandler(products)
        }
    }

    const getSizeSizeSpecific: Function = (size: Size) => {
        if(!filterSizes.includes(size)) {
            filterSizes.push(size);
        } else {
            filterSizes.splice(filterSizes.indexOf(size),1);
        }
        let filterData;
        if(filterSizes.length > 0) {
            filterData = sizeFilter(products, filterSizes);
            if(filterBrands.length > 0) {
                filterData = brandFilter(filterData, filterBrands);
            }
            if(filterGender.length > 0) {
                filterData = genderFilter(filterData, filterGender);
            }
            setRenderingProductsHandler(filterData)
        } else {
            setRenderingProductsHandler(products)
        }
    }

    const getGenderSpecific: Function = (gender:Gender) => {
        if(!filterGender.includes(gender)) {
            filterGender.push(gender)
        } else {
            filterGender.splice(filterGender.indexOf(gender), 1);
        }
        let filterData;
        if(filterGender.length > 0) {
            filterData = genderFilter(products, filterGender);
            if(filterBrands.length > 0) {
                filterData = brandFilter(filterData, filterBrands);
            }
            if(filterSizes.length > 0) {
                filterData = sizeFilter(filterData, filterSizes);
            }
            setRenderingProductsHandler(filterData)
        } else {
            setRenderingProductsHandler(products)
        }
    }

    function renderList(product: Array<string>, name: string, callbackFn: Function) {
        return product.map((productSpecification, index) => {
            return (
                <li key={index}> 
                    <label>
                        <input 
                            type="checkbox" 
                            name={name}
                            checked={setCheckedHandler(productSpecification)}
                            onChange={() => setCheckedHandler(productSpecification)}
                            onClick={() => callbackFn(productSpecification)}/>
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
                <button onClick={setClearHandler} > Clear Filters </button>
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
            <div className="sidebar--filter__sizes">
                <h3 className="sidebar--filter--sizes__heading"> Sizes </h3>
                {
                    loading ? 
                        <p> Loading... </p> : 
                        <ul> {renderList(gender, 'sizes', getGenderSpecific)} </ul>
                }
            </div>
        </div>
    );
}

export default Sidebar;