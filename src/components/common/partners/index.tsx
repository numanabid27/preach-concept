import React from 'react';
import styles from "./style.module.css"
import Image from 'next/image';
import zapta from "@/assets/images/zapta.svg"
import zee from "@/assets/images/zee.svg"
import sync from "@/assets/images/sync4tech.svg"

export function Partners() {
  return (
    <section className={styles.partners_bg}>
        <div className='container'>
            <h2>Our Tech <span>Partners</span></h2>
            <p>Innovation and Success Together with Cutting-Edge Solutions and shared visions.</p>
            <div className={styles.partners_row}>
                <Image src={zapta} alt="" />
                <Image src={zee} alt="" />
                <Image src={sync} alt="" />
            </div>
        </div>
    </section>
  )
}
