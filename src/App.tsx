import React, { FC, useEffect, useState } from 'react';

import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Showcase from './components/showcase/showcase';

import { IProducts } from './types/product.types';
import { apiFeatures } from './utils/apiFeatures';
import './App.css';

const App: FC = ():JSX.Element => {

  const [ products, setProducts ] = useState<Array<IProducts>>([]);
  const [ renderProductList, setRenderingProductList ] = useState<Array<IProducts>>([]);
  const [ loading, setLoading ] = useState<Boolean>(true);

  useEffect(() => {
    console.log('useEffect');
    const productAPIData = apiFeatures();
    setTimeout(() => {
      setLoading(false);
      setProducts(productAPIData);
      setRenderingProductList(productAPIData)
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
          <Showcase products={renderProductList} loading={loading}/>
        </div>
        <div>Footer</div>
    </div>
  );
}

export default App;