import React from 'react';
import styles from "./style.module.css"
import Image from 'next/image';
import chooseUs from "@/assets/images/choose-us.png"

export default function ChooseUs() {
  return (
    <section className={styles.choose_us}>
        <div className='container'>
            <h2>Why Choose <span>Preach Concepts</span> LLC?</h2>
            <div className={styles.choose_row}>
                <div className={styles.choose_col}>
                    <Image src={chooseUs} alt="" />
                </div>
                <div className={styles.choose_col}>

                </div>
            </div>
        </div>
    </section>
  )
}
