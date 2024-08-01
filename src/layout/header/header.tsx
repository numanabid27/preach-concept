import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header_bg}>
      <div className={styles.header_inner + " " + "container"}>
        <div className={styles.logo}>
          <Image src={logo} alt="" />
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
