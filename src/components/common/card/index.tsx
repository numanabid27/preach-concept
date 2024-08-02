"use client";
import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
});
export function Card({ img, title, desc, services }: any) {
  return (
    <div className={styles.card}>
      {services && services ? (
        <Image src={img} alt="" width={50} height={50} />
      ) : (
        <Image src={img} alt="" width={37} height={37} />
      )}
      <h6 className={mulish.className}>{title}</h6>
      <p className={mulish.className}>{desc}</p>
    </div>
  );
}
