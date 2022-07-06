import React from 'react';
import Product from '../components/Product';
import fetch from 'isomorphic-unfetch';
import {useUser} from '@auth0/nextjs-auth0';

const Products = ({products, productsA, productsB}) => {
  const {user} = useUser();
  console.log(user);
  return (
    <div className="products-container">
        <h1>Product</h1>
        <div className="grid wrapper">  
          {user.nickname === 'storea' && (productsA.data?.map((product) => <Product key={product._id} product={product} /> ))}
          {user.nickname === 'storeb' && (productsB.data?.map((product) => <Product key={product._id} product={product} /> ))}
          {user.nickname === 'boss' && (products.data?.map((product) => <Product key={product._id} product={product} /> ))}
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const productsData = await fetch('http://localhost:3000/api/products');
  const productsAData = await fetch('http://localhost:3000/api/products/storeA');
  const productsBData = await fetch('http://localhost:3000/api/products/storeB');
  const products = await productsData.json();
  const productsA = await productsAData.json();
  const productsB = await productsBData.json();
 
  return{
    props: {products, productsA, productsB}
  }
}

export default Products;