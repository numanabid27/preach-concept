"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useDimensions from "@/app/hooks/use-dimensation";
import menu from "@/assets/images/menu.png";
import close from "@/assets/images/close.png";

const Header = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState<any>("");
  const { width } = useDimensions();
  useEffect(() => {
    setIsMobile(false);
  }, [pathname]);

  return (
    <div className={styles.header_bg}>
      {width && width > 700 ? (
        <div className={styles.header_inner + " " + "container"}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} alt="" />
            </Link>
          </div>
          <div className={styles.list}>
            <ul>
              <li className={pathname == "/" ? styles.navActive : ""}>
                <Link href="/">Home</Link>
              </li>
              <li className={pathname == "/services" ? styles.navActive : ""}>
                <Link href="/services">Services</Link>
              </li>
              <li className={pathname == "/about" ? styles.navActive : ""}>
                <Link href="/about">About Us</Link>
              </li>
              <li className={pathname == "/contact" ? styles.navActive : ""}>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.header_inner + " " + "container"}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} alt="" />
            </Link>
          </div>
          {width && width > 700 ? (
            <div onClick={() => setIsMobile(!isMobile)}>
              {isMobile && isMobile ? (
                <Image src={close} alt="" width={23} height={23} />
              ) : (
                <Image src={menu} alt="" width={23} height={23} />
              )}
            </div>
          ) : null}

          {isMobile ? (
            <div className={styles.list}>
              <ul>
                <li className={pathname == "/" ? styles.navActive : ""}>
                  <Link href="/">Home</Link>
                </li>
                <li className={pathname == "/services" ? styles.navActive : ""}>
                  <Link href="/services">Services</Link>
                </li>
                <li className={pathname == "/about" ? styles.navActive : ""}>
                  <Link href="/about">About Us</Link>
                </li>
                <li className={pathname == "/contact" ? styles.navActive : ""}>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Header;
