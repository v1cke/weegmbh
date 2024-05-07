import Link from "next/link";
import React from "react";

const Contact = () => {
  const contactData = [
    {
      id: 1,
      icon: "flaticon-telephone-call",
      contact: "tel:+49 541 4444040",
      infoText: "Telefon:",
      other: " +49 541 4444040",
    },
    {
      id: 2,
      icon: "flaticon-envelope",
      contact: "mailto:info@wee.gmbh",
      infoText: "email schicken:",
      other: " info@wee.gmbh",
    },
    {
      id: 3,
      icon: "flaticon-pin",
      contact:
        "https://www.google.com/maps/place/Franz-Lenz-Stra%C3%9Fe+1,+49084+Osnabr%C3%BCck/@52.2729587,8.0625574,17z/data=!3m1!4b1!4m6!3m5!1s0x47b9e59e067d15f7:0x3365287d34a6b349!8m2!3d52.2729587!4d8.0651323!16s%2Fg%2F11c1zssr4h?entry=ttu",
      infoText: "besuchen:",
      other: " Osnabrück, Deutschland",
    },
  ];
  return (
    <div className="contact--wrapper mb-60">
      <div className="section__title mb-45">
        <span className="sub-title">Kontaktieren Sie uns</span>
        <h2 className="title">Mit einem Mitarbeiter sprechen</h2>
      </div>
      <div className="contact-info mr-20">
        {contactData.map((item) => (
          <div
            className="single-contact-info d-flex align-items-center"
            key={item.id}
          >
            <div className="contact-info-icon">
              {item.contact.startsWith("https") ? (
                <Link href={item.contact} target="_blank">
                  <i className={item.icon}></i>
                </Link>
              ) : (
                <Link href={item.contact}>
                  <i className={item.icon}></i>
                </Link>
              )}
            </div>
            <div className="contact-info-text">
              <span>{item.infoText}</span>
              {item.contact.startsWith("https") ? (
                <Link href={item.contact} target="_blank">
                  {item.other}
                </Link>
              ) : (
                <Link href={item.contact}>{item.other}</Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
