import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const About = () => {
    return(
        <div className="about">
            <h1>About Shoes.So</h1>
        
            <div className="cont2">
               <a href=""><h2>Instagram: @shoes.co</h2></a>
               <a href=""><h2>Twitter: @shoes.co</h2></a>
               <a href=""><h2>Website: @shoes.co</h2></a>
            </div>
        </div>
    )
}

export default About;