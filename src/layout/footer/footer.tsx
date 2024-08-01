import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import fb from "@/assets/images/social-1.svg"
import twitter from "@/assets/images/social-2.svg"
import insta from "@/assets/images/social-3.svg"

const Footer = () => {
  return (
    <footer className={styles.footer_bg}>
        <div className='container'>
          <div className={styles.footer_nav__row}>
            <div className={styles.footer_navCol}>
              <Image src={fb} alt="" width={40} height={40} />
              <Image src={twitter} alt="" width={40} height={40} />
              <Image src={insta} alt="" width={40} height={40} />
            </div>
            <div className={styles.footer_navLink}>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About</a></li>
                </ul>
            </div>
          </div>

          <div className=''>

          </div>
        </div>
    </footer>
  )
}

export default Footer