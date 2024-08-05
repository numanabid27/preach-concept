import React from "react";
import { Hero } from "../common/hero/hero";
import banner from "@/assets/images/services-banner.jpeg";
import web from "@/assets/images/web.svg";
import sass from "@/assets/images/sass.svg";
import mobile from "@/assets/images/mobile-app.svg";
import ui from "@/assets/images/ui-ux.svg";
import project from "@/assets/images/project.svg";
import cost from "@/assets/images/cost.svg";
import { Card } from "../common/card";
import styles from "./style.module.css";
import Image from "next/image";
import services from "@/assets/images/services.jpeg";
import { Partners } from "../common/partners";

export function Services() {
  const services_Data = [
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
    {
      title: "Product Management",
      desc: "Identifying product-market fit, project preparation, data analysis, and cost analysis to ensure your product stands out.",
      img: project,
    },
    {
      title: "Operational Cost Reduction",
      desc: "Leveraging data and best practices to help you optimize your budget and maximize ROI.",
      img: cost,
    },
  ];

  const services_list = [
    {
      value: "Expertise and Experience",
      text: "Our team comprises experts with extensive experience in product management, development, and design.",
    },
    {
      value: "Cost-Effective Solutions",
      text: "We deliver top-tier services at a fraction of the cost, ensuring you get the best value for your investment.",
    },
    {
      value: "Customer-Centric Approach",
      text: "We prioritize your needs and work tirelessly to exceed your expectations.",
    },
    {
      value: "Scalable Solutions",
      text: "We build products designed to grow with your business, ensuring long-term success.",
    },
  ];
  return (
    <>
      <Hero
        img={banner}
        title={
          <>
            Our <span style={{ color: "#005AAB" }}>Services</span>
          </>
        }
        para="We offer a wide range of services tailored to meet diverse needs"
        button="Get In Touch"
      />

      <section className={styles.serivces_row + "" + " container"}>
        <div className={styles.card_grid}>
          {services_Data.map((item, i) => {
            return (
              <div key={i.toString()} className={styles.serivces_col}>
                <Card
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  services={true}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.preact_sec}>
        <div className="container">
          <h2>
            Why Choose <span>Preach Concepts</span> LLC?
          </h2>
          <div className={styles.services_info__row}>
            <div className={styles.services_info__col}>
              {services_list.map((item, i) => {
                return (
                  <div key={i.toString()} className={styles.inner}>
                    <h6>{item.value}</h6>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.services_info__col2}>
              <Image src={services} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className={styles.partner_Sec}>
        <Partners />
      </div>
    </>
  );
}
