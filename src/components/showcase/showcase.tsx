import React, { FC } from 'react';

import { IProducts } from '../../types/product.types';
import './showcase.css';

interface IProps { products: Array<IProducts>, loading: Boolean }

function renderCards() {

}

const Showcase: FC<IProps> = ({products, loading}: IProps): JSX.Element => {
    return (
       <div className="products">
           { loading ?
            <div> Loading.... </div> : 
            <div> { products?.map((product: IProducts) => {
                return ( <div key={product.id}> {product.price} </div> )
            }) } </div> }
       </div>
    );
}

export default Showcase;