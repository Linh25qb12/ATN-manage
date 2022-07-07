import React from 'react';
import Link from 'next/link';
import {useUser} from '@auth0/nextjs-auth0';

const Index = () => {
  const {user} = useUser();
  return (
    <>
      {user && (
        <div>
          <h1>You have already logged in</h1>
          <h3><Link href="/product">See the product</Link></h3>
        </div>
      )}
      {!user && (
        <div className="image-container">
          <img  src="/image/cute.png" alt="Cute girl with board" width="500" height="500"></img>
        </div>
      )}
    </>
    
    
  )
}

export default Index;