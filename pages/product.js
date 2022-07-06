import React from 'react';
import Product from '../components/Product';
import fetch from 'isomorphic-unfetch';
import {useUser} from '@auth0/nextjs-auth0';

const Products = ({products, productsA, productsB}) => {
  const {user} = useUser();
  console.log(user);
  return (
    <div className="products-container">
        <h1>{user.nickname.toUpperCase()}</h1>
        <div className="grid wrapper">  
            {user.nickname === 'storea' && (productsA.data?.map((product) => <Product key={product._id} product={product} /> ))}
            {user.nickname === 'storeb' && (productsB.data?.map((product) => <Product key={product._id} product={product} /> ))}
            {user.nickname === 'boss' && (products.data?.map((product) => <Product key={product._id} product={product} /> ))}
            <Link href="/new">
                <Button primary>Add a new Product</Button>
            </Link>
        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const productsData = await fetch('https://atn-manage-terminatorxxd.vercel.app/api/products');
  const productsAData = await fetch('https://atn-manage-terminatorxxd.vercel.app/api/products/storeA');
  const productsBData = await fetch('https://atn-manage-terminatorxxd.vercel.app/api/products/storeB');
  const products = await productsData.json();
  const productsA = await productsAData.json();
  const productsB = await productsBData.json();
 
  return{
    props: {products, productsA, productsB}
  }
}

export default Products;