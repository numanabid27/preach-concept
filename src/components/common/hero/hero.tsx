"use client"

import React from "react";
import styles from "./style.module.css";
import useDimensions from "@/app/hooks/use-dimensation";
import Link from "next/link";


export function Hero({ img, title, para, button, contact, tagLine }: any) {
  const imageUrl = img.src;
  const {width} = useDimensions();
  return (
    <div className={styles.banner} style={{ backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 71%), rgb(0 0 0 / 71%)), url(${imageUrl})` }}>
      {/* {
        width && width < 700 ?
        <Image src={img} alt="" style={{height: contact ? "50vh" : "80vh"}} />
        :
        <Image src={img} alt="" style={{height: contact ? "70vh" : "100vh"}} />
      } */}
      
      <div className="container">
        <div className={styles.banner_desc}>
          <h6>{tagLine}</h6>
          <h1 style={{ textAlign: width < 700 && contact ? 'center' : 'unset' }}>{title}</h1>
          {para && <p>{para}</p>}
          {button && <Link href="/contact">{button}</Link>}
        </div>
      </div>
    </div>
  );
}
