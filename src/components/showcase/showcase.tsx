import React, { FC } from 'react';

import { IProducts } from '../../types/product.types';
import './showcase.css';

interface IProps { products: Array<IProducts>, loading: Boolean }

function renderCards(product: IProducts) {
    return (
        <div className="products--card" key={product.id}>
            <div className="products--card__image">
                <img src={product.image} width="320" height="200" alt={product.product} />
            </div>
            <div className="products--card__desc">
                <p>{product.product}</p>
                <p>{product.product_desc}</p>            
            </div>
            <div className="products--card__price">
                <div> {product.price} </div>
                <div className="products--card__original"> {product.original_price} </div>
                <div className="products--card__discount"> {product.discount}% off</div>
            </div>
        </div>
    );
}

const Showcase: FC<IProps> = ({products, loading}: IProps): JSX.Element => {
    return (
       <div className="products">
           { loading ?
            <div> Loading.... </div> : 
            <div className="product--container">
                {products.map(product => renderCards(product))}
            </div>
           }

       </div>
    );
}

export default Showcase;