import Image from 'next/image'
import React from 'react'
import styles from "./style.module.css"

export function Hero({img, title, para, button}:any) {
  return (
    <div className={styles.banner}>
        <Image src={img} alt="" />
        <div className={styles.banner_desc}>
            <h1>{title}</h1>
            <p>{para}</p>
            <button>{button}</button>
        </div>
    </div>
  )
}
