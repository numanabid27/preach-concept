"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import logoDefault from "@/assets/images/logoDefault.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useDimensions from "@/app/hooks/use-dimensation";
import menu from "@/assets/images/menu.png";
import close from "@/assets/images/close.png";

const Header = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState<any>("");
  const { width } = useDimensions();
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    setIsMobile(false);
  }, [pathname]);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
     return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className={showDiv ? styles.header_scrollbg : styles.header_bg}>
      {width && width < 700 ? (
        <div className={styles.header_inner + " " + "container"}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={showDiv ? logo :logoDefault} alt="" />
            </Link>
          </div>
          <div onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? (
              <Image src={close} alt="" width={19} height={19} style={{filter: !showDiv ? "brightness(100)" : "unset"}} />
            ) : (
              <Image src={menu} alt="" width={19} height={19} style={{filter: !showDiv ? "brightness(100)" : "unset"}} />
            )}
          </div>

          {isMobile ? (
            <div className={showDiv ? styles.listScrollable : styles.list}>
              <ul>
              <li className={`${pathname == "/" ? styles.navActive : ""} ${showDiv ? styles.navActive2 : ""}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`${pathname == "/services" ? styles.navActive : ""} ${showDiv ? styles.navActive2 : ""}`}>
                <Link href="/services">Services</Link>
              </li>
              <li className={`${pathname == "/about" ? styles.navActive : ""} ${showDiv ? styles.navActive2 : ""}`}>
                <Link href="/about">About Us</Link>
              </li>
              <li className={`${pathname == "/contact" ? styles.navActive : ""} ${showDiv ? styles.navActive2 : ""}`}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
            </div>
          ) : null}
        </div>
      ) : (
        <div className={styles.header_inner + " " + "container"}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={showDiv ? logo : logoDefault} alt="" />
            </Link>
          </div>
          <div className={showDiv ? styles.listScrollable : styles.list}>
            <ul>
              <li className={`${pathname == "/" ? styles.navActive : ""} ${showDiv ? styles.navActive2 : ""}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={`${pathname == "/services" ? styles.navActive : ""} ${showDiv ? styles.navActive2 : ""}`}>
                <Link href="/services">Services</Link>
              </li>
              <li className={`${pathname == "/about" ? styles.navActive : ""} ${showDiv ? styles.navActive2 : ""}`}>
                <Link href="/about">About Us</Link>
              </li>
              <li className={`${pathname == "/contact" ? styles.navActive : ""} ${showDiv ? styles.navActive2 : ""}`}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
