import React from 'react'
import { Hero } from '../common/hero/hero'
import banner from "@/assets/images/home-banner.png";
import styles from "./style.module.css"
import { Partners } from '../common/partners';

export function About() {
    const data = [
        {
            title:"Inclusivity:",
            desc:"We believe that everyone, regardless of the size of their business, deserves access to top-tier product management and development services."
        },
        {
            title:"Affordability:",
            desc:"We are dedicated to offering cost-effective solutions that provide the best value for your investment."
        },
        {
            title:"Quality:",
            desc:"Our team of seasoned experts ensures that every project meets the highest standards of quality and performance."
        },{
            title:"Customer-Centric Approach:",
            desc:"We prioritize your needs and work tirelessly to exceed your expectations, providing personalized solutions that drive success."
        }
    ]
  return (
    <>
        <Hero
            img={banner}
            title={
            <>
                About <span style={{ color: "#005AAB" }}>Us</span>{" "}

            </>
            }
            para="We understand that many small businesses and individuals aspire to enhance their online presence, develop mobile apps, improve user design, manage software projects efficiently, and reduce operational costs. Our goal is to help them achieve these objectives without breaking the bank."
            button="Get In Touch"
        />

        <section className={styles.ourValue_sec}>
            <h2>Our <span>Values</span></h2>
            <div className='container'>
                <div className={styles.value_card__row}>
                    {
                        data.map((item:any, i:number)=>{
                            return(
                                <div className={styles.value_card__col} key={i.toString()}>
                                    <span>0{i+1}</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

        <div className={styles.partner_Sec}>
            <Partners />
        </div>
    </>
  )
}
