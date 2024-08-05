"use client"

import React from "react";
import styles from "./style.module.css";
import useDimensions from "@/app/hooks/use-dimensation";


export function Hero({ img, title, para, button, contact, tagLine }: any) {
  const imageUrl = img.src;
  const {width} = useDimensions();
  return (
    <div className={styles.banner} style={{ backgroundImage: `linear-gradient(to right, #012842, rgb(10 35 64 / 34%)), url(${imageUrl})` }}>
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
          {button && <button>{button}</button>}
        </div>
      </div>
    </div>
  );
}
