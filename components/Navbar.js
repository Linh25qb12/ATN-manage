import Link from 'next/link';  
import {useUser} from '@auth0/nextjs-auth0';

const Navbar = () => {
  const {user} = useUser();
  return (
     <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">ATN Store</a>
        </Link>
        {user 
        
        ?
          <Link href="/api/auth/logout">
            <a className="login">Logout</a>
          </Link>
        :
          <Link href="/api/auth/login">
            <a className="login">Login</a>
          </Link>
        }
       
     </nav>
  )
}

export default Navbar;  