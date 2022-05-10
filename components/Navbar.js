import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
               <img src="https://dorar.net/img/encyclopedia-icon.svg" alt="Kaaba logo" />

               <h3>الموسوعة الحديثية</h3>
            </div>

            
            <Link href="/about"> 
                <a>التعريف بالموقع</a>
            </Link>

            <Link href="/">
                <a>الرئيسة </a> 
            </Link>
        </nav>
    )
}

export default Navbar;