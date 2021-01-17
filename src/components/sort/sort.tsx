import React, { FC } from 'react';
import { IProducts } from '../../types/product.types';

import { apiFeatures } from '../../utils/apiFeatures';
import './sort.css';

interface Props {
    setRenderingProductsHandler: Function,
    products: Array<IProducts>
}

const sortData = ['High', 'Low', 'def'];

const Sort: FC<Props> = ({products, setRenderingProductsHandler}: Props):JSX.Element => {

    const manipulateData = (number:any) => {
        const apiType = sortData[number];
        const data = apiFeatures(products, apiType);
        setRenderingProductsHandler(data);
    }

    return (
        <div className="sort--menu">
            <h3> Sort By: </h3>
            <div onClick={() => manipulateData(2)}> Price - latest </div>
            <div onClick={() => manipulateData(1)}> Price - Low to High </div>
            <div onClick={() => manipulateData(0)}> Price - High to Low </div>
        </div>
    )
}

export default Sort;