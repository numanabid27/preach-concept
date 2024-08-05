import React from "react";
import { Hero } from "../common/hero/hero";
import banner from "@/assets/images/home-banner.png";
import { Card } from "../common/card";
import search from "@/assets/images/search.svg";
import styles from "./style.module.css";
import project from "@/assets/images/project.svg";
import data from "@/assets/images/data.svg";
import cost from "@/assets/images/cost.svg";
import Image from "next/image";
import practice from "@/assets/images/best-practice.png"
import ChooseUs from "../common/choose-us";
import { Partners } from "../common/partners";
import web from "@/assets/images/web.svg";
import sass from "@/assets/images/sass.svg";
import mobile from "@/assets/images/mobile-app.svg";
import ui from "@/assets/images/ui-ux.svg";

export function Home() {
  const services_Data = [
    {
      title: "Identify Product-Market Fi",
      desc: "We conduct market, competitor, and user research to ensure your product meets needs and stands out.",
      img: search,
    },
    {
      title: "Project Preparation",
      desc: "We meticulously prepare projects for development, ensuring all requirements are clear & actionable.",
      img: project,
    },
    {
      title: "Data Analysis and Research",
      desc: "We leverage data to provide actionable insights, helping you make informed decisions.",
      img: data,
    },
    {
      title: "Cost Analysis",
      desc: "We provide detailed cost analyses optimize your budget and maximize ROI",
      img: cost,
    },
  ];

  const development_Services = [
    {
      title: "Website Development",
      desc: "Crafting responsive, user-friendly websites that engage and convert.",
      img: web,
    },
    {
      title: "SaaS Web Applications",
      desc: "Building robust SaaS applications that scale seamlessly.",
      img: sass,
    },
    {
      title: "Mobile App Development",
      desc: "Creating intuitive mobile apps for both iOS and Android platforms.",
      img: mobile,
    },
    {
      title: "UI/UX Design",
      desc: "Designing captivating user interfaces and experiences that delight users.",
      img: ui,
    },
  ]
  return (
    <>
      <Hero
        img={banner}
        tagLine="Welcome to Preach Concepts LLC"
        title={
          <>
            Your Partner in <span style={{ color: "#005AAB" }}>SaaS</span>{" "}
            Product Management and Software Development
          </>
        }
        para="At Preach Concepts LLC, we turn innovative ideas into successful, scalable products, ensuring market fit and top-notch development for competitive success."
        button="Start Your Project Today"
      />
      <section className={styles.serivces_row + "" + " container"}>
        <h2>
          Product Management <span>Services</span>
        </h2>
        <p>Our seasoned product managers work closely with you to</p>
        <div className={styles.card_grid}>
          {services_Data.map((item, i) => {
            return (
              <div key={i.toString()} className={styles.serivces_col}>
                <Card img={item.img} title={item.title} desc={item.desc} />
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.serivces_row + "" + " container"}>
        <h2>
          Development <span>Services</span>
        </h2>
        <p>We offer a range of development services to bring your vision to life:</p>
        <div className={styles.card_grid}>
          {development_Services.map((item, i) => {
            return (
              <div key={i.toString()} className={styles.serivces_col}>
                <Card img={item.img} title={item.title} desc={item.desc} />
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.best_practice}>
        <div className="container">
          <div className={styles.best_practice_Row}>
            <div className={styles.best_practice_col}>
              <h2>Agile Best <span>Practices</span></h2>
              <p>We help you implement Agile best practices, fostering a collaborative and efficient development environment. Our approach ensures quick iterations, continuous feedback, and rapid delivery of high-quality products.</p>
            </div>
            <div className={styles.best_practice_col2}>
              <Image src={practice} alt="" />
            </div>
          </div>
        </div>
      </section>

      <ChooseUs />
      <div className={styles.partner_Sec}>
        <Partners />
      </div>
    </>
  );
}
