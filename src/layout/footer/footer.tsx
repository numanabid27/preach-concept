import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import linkdin from "@/assets/images/social-3.svg"
import twitter from "@/assets/images/social-2.svg"
import insta from "@/assets/images/instagram.png"
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
              <Link href="https://www.linkedin.com/company/preachtech/" target='_blank'>
                <Image src={linkdin} alt="" width={40} height={40} />
              </Link>
              <Link href="https://www.instagram.com/preachtechnologies?igsh=N3E4NXp4dnFkeHV2&utm_source=qr" target='_blank'>
                <Image src={insta} alt="" width={40} height={40} />
              </Link>
            </div>
            <div className={styles.footer_navLink}>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/about">About</Link></li>
                </ul>
            </div>
          </div>

         
        </div>
    </footer>
  )
}

export default Footer