// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Link from 'next/link';
const Brands = () => {
    return (
        <div class="cont1">
            <h1>All Brands</h1>

            <div className="cont2">
                <div class="brands"> 
                <a target="blank" href="../brands/nike"><img class="brand" src="../image/logonike.png"></img></a>
                <a target="blank" href="/brands/converse"><img class="brand" src="../image/converse.png"></img></a>
                <a target="blank" href="/brands/rebook"><img class="brand" src="../image/reebook.png"></img></a>
               </div>  
            </div>
            
            <h2>Gallery of Shoes.Co</h2>

            <div className="nike"> 
                <a href="image/reebok/reebok1.jpg"><img class="imgGaleri" src="image/reebok/reebok1.jpg"></img></a>
                <a href="image/nike/nike2.jpg"><img class="imgGaleri" src="image/nike/nike2.jpg"></img></a>
                <a href="image/nike/nike5.jpg"><img class="imgGaleri" src="image/nike/nike5.jpg"></img></a>
                <a href="image/converse/converse0.jpg"><img class="imgGaleri" src="image/converse/converse0.jpg"></img></a>
                <a href="image/reebok/reebok2.jpg"><img class="imgGaleri" src="image/reebok/reebok2.jpg"></img></a>
                <a href="image/converse/converse1.jpg"><img class="imgGaleri" src="image/converse/converse1.jpg"></img></a>
                <a href="image/nike1.jpg"><img class="imgGaleri" src="image/nike1.jpg"></img></a>
                <a href="image/nike/nike3.jpg"><img class="imgGaleri" src="image/nike/nike3.jpg"></img></a>
                <a href="../image/converse/converse0.jpg"><img class="imgGaleri" src="../image/converse/converse0.jpg"></img></a>
                <a href="../image/converse/converse4.jpg"><img class="imgGaleri" src="../image/converse/converse4.jpg"></img></a>
                <a href="../image/converse/converse2.jpg"><img class="imgGaleri" src="../image/converse/converse2.jpg"></img></a>
                <a href="../image/converse/converse3.jpg"><img class="imgGaleri" src="../image/converse/converse3.jpg"></img></a>
            </div>
                
        </div>
      
    );
}

export default Brands;