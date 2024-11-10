import Link from "next/link";
export default function Header(){
    return(
        <div >
        <ul className="navigation-bar">
        <li className="navigation-button"><Link  href="/" >Home</Link></li>
        <li className="navigation-button"><Link href="/portfolio" >Portfolio</Link></li>
        <li className="navigation-button"><Link href="/about">About</Link></li>
        <li className="navigation-button"><Link href="/contact">Contact Us</Link></li>
        </ul>
        </div>
    )
}