import Link from "next/link";  
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
const NotFound = () => {
    const Router = useRouter();

    useEffect(() => {
        console.log("run use Effect");
    },[])
    return(
        <div className="NotFound">
                <h1>Maafkan...</h1>
                <h2> halaman yang anda tuju tidak ditemukan</h2>
                <p>kembali <Link href="/"><a>ke Home</a></Link></p>
                 
        </div>
        
    )
}

export default NotFound;