import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import styles from '@/styles/Navbar.module.css'
import Link from "next/link";
import Blogpage from "@/pages/blogpage";


const Navbar = () => {
    
    const navRef = useRef(null);
    const btnRef = useRef(null);
    const btn2Ref = useRef(null);

     const showNavbar = ()=> {
        navRef.current.classList.toggle(`${styles.responsive_nav}`);
        btnRef.current.classList.toggle(`${styles.responsive_btn}`);
        btn2Ref.current.classList.toggle(`${styles.responsive_btn}`);
     }


    return ( 
        <nav className={styles.navbar}>
            <h1 ><Link href={"/"}><span className="text-blue-500">A </span><span className="text-red-400">N</span> <span className="text-yellow-300">D </span><span className="text-blue-500">A </span><span className="text-lime-400">M </span><span className="text-yellow-300">A </span> <span className="text-red-400">N</span></Link></h1>
            <ul className={`${styles.nav_list} ${styles.responsive_nav}`} ref={navRef}>
                <li className={styles.list_items}><Link href={"/ferry_page"}>Plan Your Trip</Link></li>
                <li className={styles.list_items}><Link href={""}>Book Experiences</Link></li>
                <li className={styles.list_items}><Link href={""}>Book Andaman Ferry</Link></li>
                <li className={styles.list_items}><Link href={"/blogpage"}>Travel Blog</Link></li>
                <li className={styles.list_items}><Link href={""}>Contact us</Link></li>
                <button ref={btnRef} className={`${styles.nav_btn} ${styles.responsive_btn}`}>
                    <FaTimes onClick={showNavbar}/>
                </button>
            </ul>
            <button className={` ${styles.nav_btn}`} ref={btn2Ref}>
                <FaBars onClick={showNavbar}/>
            </button>
            </nav>
     );
}
 
export default Navbar;