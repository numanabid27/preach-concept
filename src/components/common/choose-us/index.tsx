import React from 'react';
import styles from "./style.module.css"
import Image from 'next/image';
import chooseUs from "@/assets/images/choose-us.png"
import check from "@/assets/images/check.svg"

export default function ChooseUs() {
  const data = [
    {
      title:"Expertise and Experience",
      para:"Our team comprises experts with extensive experience in product management, development, and design."
    },
    {
      title:"Cost-Effective Solutions",
      para:"We deliver top-tier services at a fraction of the cost, ensuring you get the best value for your investment."
    },
    {
      title:"Customer-Centric Approach",
      para:"We prioritize your needs and work tirelessly to exceed your expectations."
    },
    {
      title:"Scalable Solutions",
      para:"We build products designed to grow with your business, ensuring long-term success."
    }
  ]
  return (
    <section className={styles.choose_us}>
        <div className='container'>
            <h2>Why Choose <span>Preach Technologies</span> LLC?</h2>
            <div className={styles.choose_row}>
                <div className={styles.choose_col}>
                    <Image src={chooseUs} alt="" />
                </div>
                <div className={styles.choose_col2}>
                  <div className={styles.choose__inner_row}>
                    {
                      data.map((item, i)=>{
                        return(
                          <div key={i.toString()} className={styles.choose__inner_col}>
                            <Image src={check} alt="" width={55} height={55} />
                            <h6>{item.title}</h6>
                            <p>{item.para}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}
