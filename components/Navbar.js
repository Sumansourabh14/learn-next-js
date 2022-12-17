import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <Image src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" width={160} height={50} />
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/lists/list">List</Link>
    </nav>
  )
}

export default Navbar;