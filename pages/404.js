import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // redirect to home page after 3 seconds
            router.push("/"); 
        }, 3000);
    }, []);
    
  return (
    <div className="not-found">
        <h1>404 Not Found</h1>
        <p>Go back to the <Link href="/">Home Page</Link></p>
    </div>
  )
}

export default NotFound;