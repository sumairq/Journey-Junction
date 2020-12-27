import React,{useState} from 'react'
import {Link} from 'gatsby'
import {FaRProject} from "react-icons/fa"
import {FaAlignRight} from "react-icons/fa"
import styles from "../css/navbar.module.css"
import {ImMenu} from "react-icons/im"
import socialIcons from "../constants/social-icons"
import links from '../constants/links'
import logo from '../images/logo.svg'

export default function Navbar() {
    const [isOpen,setNav] = useState(false)
    const toggleNav = () =>{
        setNav(isOpen => !isOpen)   // short syntax of function
    }
    console.log(isOpen)
    return (
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
            <div className={styles.navHeader}>
                <img src={logo} alt="backroads logo"/>
                <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                    <FaAlignRight className={styles.logoIcon} />
                </button>
            </div>
            <ul className={ isOpen?`${styles.navLinks} ${styles.showNav}`:`${styles.navLinks}`}>
         {links.map((item, index)=>{
             return(<li Key={index}><Link to={item.path}>
                 {item.text}
                 </Link></li>)
         })}
            </ul>
            <div className={styles.navSocialLinks}>
                {socialIcons.map((item,index)=>{
                    return( 
                    <a
                    key={index} 
                    href={item.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    {item.icon}
                    </a>
                    )
                })}
            </div>
            </div>
        </nav>
    )
}
