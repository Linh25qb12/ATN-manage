import Link from 'next/link';  

const Navbar = () => {
  return (
     <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">ATN Store</a>
        </Link>
        <Link href="/new">
            <a className="create">Add new Product</a>
        </Link>
     </nav>
  )
}

export default Navbar;  