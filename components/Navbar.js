import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
        <div>
            <h2>Learn Next.js</h2>
        </div>
        <Link href="/">
            Home
        </Link>
        <Link href="/about">
            About
        </Link>
        <Link href="/lists/list">
            List
        </Link>
    </nav>
  )
}

export default Navbar;