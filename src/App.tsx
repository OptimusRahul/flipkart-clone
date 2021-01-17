import React, { FC, useEffect, useState } from 'react';

import Navbar from './components/navbar/navbar';
import Sort from './components/sort/sort';
import Sidebar from './components/sidebar/sidebar';
import Showcase from './components/showcase/showcase';

import { getData } from './api';
import { IProducts } from './types/product.types';

import './App.css';

const productsAPIData: Array<IProducts> = getData();
const App: FC = ():JSX.Element => {

  const [ products, setProducts ] = useState<Array<IProducts>>([]);
  const [ renderProductList, setRenderingProductList ] = useState<Array<IProducts>>([]);
  const [ loading, setLoading ] = useState<Boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setProducts(productsAPIData);
      setRenderingProductList(productsAPIData)
    }, 2000);
  }, []);

  const setLoadingHandler: Function = (loading: Boolean) => setLoading(loading);

  const setRenderingProductsHandler: Function = (data: Array<IProducts>) => {
    setRenderingProductList(data);
  }

  return (
    <div>
      <Navbar />
      <div className="main">
        <Sidebar  
          products={products}
          renderProductList={renderProductList}
          loading={loading} 
          setRenderingProductsHandler={setRenderingProductsHandler}
          setLoadingHandler={setLoadingHandler} />
          <div className="main--container">
            <Sort products={products} setRenderingProductsHandler={setRenderingProductsHandler}/>
            <Showcase products={renderProductList} loading={loading}/>
          </div>
      </div>
    </div>
  );
}

export default App;