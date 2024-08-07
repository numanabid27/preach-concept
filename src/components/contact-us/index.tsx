"use client";

import React, { useState } from "react";
import { Hero } from "../common/hero/hero";
import banner from "../../assets/images/contact-banner.png";
import styles from "./style.module.css";
import { Partners } from "../common/partners";
import Error from "../common/error/error";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export function Contact() {
  const form = useRef<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(false);
  const [isContact, setIsContact] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setIsContact({
      ...isContact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !isContact.fname ||
      !isContact.lname ||
      !isContact.email ||
      !isContact.message
    ) {
      return setError(true);
    } else {
      setResponseMessage("");
      setError(false);
      setIsLoading(true);
      try {
        const handleSubmit :any = await emailjs.sendForm(
          "service_u4vdakv",
          "template_p8kdkbc",
          form.current,
          {
            publicKey: "tGYXxDed0VbL-UjJ-",
          }
        );
        if(handleSubmit.status === 200){
          setResponseMessage("SUCCESS!");
          setIsContact({
            fname: "",
            lname: "",
            email: "",
            message: "",
          });
          e.target.reset();
        }
      } catch (error: any) {
        setResponseMessage(`FAILED... ${error.text}`);
      } finally {
        setIsLoading(false);
       
      }
    }
  };

  return (
    <>
      <Hero
        img={banner}
        title={
          <>
            Contact <span style={{ color: "#2F82C9" }}>Us</span>
          </>
        }
        contact={true}
      />
      <section className={styles.contact_sec}>
        <div className="container">
          <div className={styles.contact_Form}>
            <h2>Get in touch</h2>
            <p>
              Your goals are our priority. Whether you have a clear vision or
              need guidance to define it, we're ready to jump in and get to
              work.
            </p>
            <form onSubmit={handleSubmit} ref={form}>
              <div className={styles.form_row}>
                <div className={styles.form_col}>
                  <label htmlFor="fname">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="fname"
                    onChange={handleChange}
                  />
                  {error && isContact.fname === "" ? (
                    <Error text="First name is required" />
                  ) : null}
                </div>
                <div className={styles.form_col}>
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    onChange={handleChange}
                  />
                  {error && isContact.lname === "" ? (
                    <Error text="Last name is required" />
                  ) : null}
                </div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  onChange={handleChange}
                />
                {error && isContact.email === "" ? (
                  <Error text="Email is required" />
                ) : null}
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="Message"
                  name="message"
                  rows={5}
                  onChange={handleChange}
                ></textarea>
                {error && isContact.message === "" ? (
                  <Error text="Message is required" />
                ) : null}
              </div>
              <button type="submit" disabled={isLoading ? true : false}>
                {isLoading ? "sending.." : "Send now"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className={styles.partner_Sec}>
        <Partners />
      </div>
    </>
  );
}
