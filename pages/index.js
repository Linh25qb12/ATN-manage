import React from 'react';
import Link from 'next/link';
import {useUser} from '@auth0/nextjs-auth0';

const Index = () => {
  const {user} = useUser();
  return (
    <>
      {user && (
        <div>
          <Link href="/api/auth/logout">Logout</Link>
          <Link href="/product">See the product</Link>
        </div>
      )}
      {!user && (
        <h1>You have to <Link href="/api/auth/login"><a>login</a></Link> to see products</h1>
      )}
    </>
    
    
  )
}

export default Index;