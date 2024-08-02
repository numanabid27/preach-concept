import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import zapta from "@/assets/images/zapta.svg";
import zee from "@/assets/images/zee.svg";
import sync from "@/assets/images/sync4tech.svg";
import Link from "next/link";

export function Partners() {
  return (
    <section className={styles.partners_bg}>
      <div className="container">
        <h2>
          Our Tech <span>Partners</span>
        </h2>
        <p>
          Innovation and Success Together with Cutting-Edge Solutions and shared
          visions.
        </p>
        <div className={styles.partners_row}>
          <Link href="https://zaptatech.com/" target="_blank">
            <Image src={zapta} alt="" />
          </Link>
          <Link href="https://zeeframes.com/" target="_blank">
            <Image src={zee} alt="" />
          </Link>
          <Link href="https://www.sync4tech.co/" target="_blank">
            <Image src={sync} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}
