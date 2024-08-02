"use client"

import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import useDimensions from "@/app/hooks/use-dimensation";


export function Hero({ img, title, para, button, contact }: any) {
  const {width} = useDimensions();
  return (
    <div className={styles.banner}>
      {
        width && width < 700 ?
        <Image src={img} alt="" style={{height: contact ? "50vh" : "90vh"}} />
        :
        <Image src={img} alt="" style={{height: contact ? "70vh" : "100vh"}} />
      }
      
      <div className={styles.banner_desc}>
        <h1>{title}</h1>
        <p>{para}</p>
        {button && <button>{button}</button>}
      </div>
    </div>
  );
}
