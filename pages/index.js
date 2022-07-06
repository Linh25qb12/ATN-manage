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
        <h1>You have to <Link href="/api/auth/login"><a>login</a></Link> to see products</h1>
      )}
    </>
    
    
  )
}

export default Index;