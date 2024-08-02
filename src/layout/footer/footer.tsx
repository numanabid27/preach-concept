import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import fb from "@/assets/images/social-1.svg"
import twitter from "@/assets/images/social-2.svg"
import insta from "@/assets/images/social-3.svg"
import Link from 'next/link'
import one from "@/assets/images/contact-1.svg"
import two from "@/assets/images/contact-2.svg"
import three from "@/assets/images/contact-3.svg"

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
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/about">About</Link></li>
                </ul>
            </div>
          </div>

          <div className={styles.footer_bottom}>
            <Link href="#">
              <Image src={three} alt="" />
              +123 456 7890
            </Link>
            <Link href="mailto:support@preachconcepts.com">
              <Image src={two} alt="" />
              support@preachconcepts.com
            </Link>
            <Link href="#">
              <Image src={one} alt="" />
              18014 S Franklin Street, Fort Lavonne
            </Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer