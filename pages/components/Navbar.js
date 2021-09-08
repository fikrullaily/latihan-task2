import Link from 'next/link';
const Navbar = () => {
    return (
      <nav class="container">
        <div className="logo">
            <h1>Shoe.so</h1>
        </div>
        <div class="navbar">
        <Link href="/"><a> Home</a></Link>
        <Link href="/about"><a> About </a></Link>
        <Link href="/brands/"><a> Brand Listing</a></Link>
      
        </div>
      </nav>
    );
}
        
export default Navbar;