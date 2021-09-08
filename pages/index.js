import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default function Home() {
    return (
        <div>
    {/* <Navbar /> */}
    <div className= "content">
    <img className="imghome" src="image/homebg.jpg" alt=""></img>
        <h1>Shoe.so</h1>
        <div className="cont2">
                <div className="brands"> 
                <a href="../brands/nike"><img className="brand" src="../image/logonike.png"></img></a>
                <a href="/brands/converse"><img className="brand" src="../image/converse.png"></img></a>
                <a href="/brands/rebook"><img className="brand" src="../image/reebook.png"></img></a>
                </div>  
        </div>
            <p className="text1">Salah satu station shoes yang menyediakan sepatu terkini dengan cepat, 
                terupdate, dan pastinya memiliki harga khusus untuk para pelanggan. 
                Bekerjasama dengan official vendor para brand sepatu untuk mendapatkan kualitas
                terbaru, terpercaya dan juga harga yang pas. Salah satu station shoes yang menyediakan sepatu terkini dengan cepat, 
                terupdate, dan pastinya memiliki harga khusus untuk para pelanggan. 
                Bekerjasama dengan official vendor para brand sepatu untuk mendapatkan kualitas
                terbaru, terpercaya dan juga harga yang pas. 
            </p>
        <Link href="/brands/">
            <a className="foot">See Brand Listing</a>
        </Link>
    </div>
    {/* <Footer/> */}
        </div>
    )
    
    
}
