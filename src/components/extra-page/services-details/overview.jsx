import React from "react";
import FaqSection from "./faq";
import Image from "next/image";
import service_img from "@assets/img/services/services-details-img.jpg";
import service_img_2 from "@assets/img/services/services-details-img-2.jpg";

const Overview = ({ item }) => {
  // console.log(item);
  return (
    <div className="services__details-wrapper mb-60">
      <div className="services__details-img mb-35 m-img">
        <Image
          src={service_img}
          style={{ width: "100%", height: "100%" }}
          alt="services"
        />
      </div>
      <div className="service__details-content mb-25">
        <div className="section__title mb-20">
          <h3 className="title-sm">{item?.title && item?.title}</h3>
        </div>
        <p className="content-para">{item?.descriptionlong}</p>
        <p className="mb-25">
          {/* Logistics is the overseeing of both the inward and outward flow of goods from
                    the
                    manufacturing point
                    to the end user or point of use. The movement of these goods is known as transportation.
                    While some
                    use these terms interchangeably, they are two very unique aspects of the supply chain.
                    {`Here’s`} what you
                    need to know about logistics vs. transportation. */}
        </p>
        <div className="row align-items-center overview-list services-overview-space mb-30">
          <div className="col-sm-6">
            <div className="overview-list-img w-img mb-25">
              <Image
                src={item?.image}
                style={{ width: "100%", height: "100%" }}
                alt="services"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <ul className="mb-25">
              <li>{item?.point1}</li>
              <li>{item?.point2}</li>
              <li>{item?.point3}</li>
              <li>{item?.point4}</li>
              <li>{item?.point5}</li>
              <li>{item?.point6}</li>
              <li>{item?.point7}</li>
            </ul>
          </div>
        </div>
        <FaqSection />
      </div>
    </div>
  );
};

export default Overview;
