
import Link from "next/link";
import { GiNestEggs } from "react-icons/gi";
import styles from "./navLink.module.css";
import {Reem_Kufi } from "next/font/google";


const reem = Reem_Kufi({ subsets: ["arabic"] });



export default function NavLink() {
    return (
        <header className={styles.header}>
        <h1  className={`${styles.logo} ${reem.className}`}><span className={styles.spanlogo}><GiNestEggs />StrangerNest</span><span>وكر الغرباء</span></h1>
     
        <nav className={styles.navbar}>
              <ul className={styles.navLinks}>
        <Link className={styles.navLink} href="/">Home</Link>
        <Link className={styles.navLink}  href="/about">About</Link>
        <Link className={styles.navLink}  href="/posts">Strange stories</Link>
        <Link className={styles.navLink} href="/strangers">The Strangers</Link>
        </ul>
        </nav>
   
        </header>
    )
    
} 