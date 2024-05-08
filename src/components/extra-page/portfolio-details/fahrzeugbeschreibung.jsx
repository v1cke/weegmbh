import React from "react";
import SidebarDetails from "./sidebar-details";
import Fahrzeugbilder from "./fahrzeugbilder";
import FahrzeugbeschreibungText from "./fahrzeugbeschreibung-text";
import Image from "next/image";
import HelpCtaArea from "./help-cta-area";

const Fahrzeugbeschreibung = ({ item }) => {
  const portfolioContent = [
    {
      id: 1,
      icon: "flaticon-boat",
      title: "Innovation & Design",
      description: "Even though these terms",
    },
    {
      id: 2,
      icon: "flaticon-plane",
      title: "Materials & Resources",
      description: "Even though these terms",
    },
    {
      id: 3,
      icon: "flaticon-frontal-truck",
      title: "Location & Linkages",
      description: "Even though these terms",
    },
  ];

  return (
    <div className="project__details pt-120 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="portfolio__details-wrapper mb-60">
              <div className="portfolio__details-img mb-35 m-img">
                {item?.image && (
                  <Image
                    src={item?.image}
                    style={{ width: "100%", height: "auto" }}
                    alt="portfolio"
                  />
                )}
              </div>
              <div className="service-details-content">
                <FahrzeugbeschreibungText item={item} />
                {/* <div className="row portfolio__sd-box">
                  {portfolioContent.map((item) => (
                    <div className="col-lg-4 col-sm-6" key={item.id}>
                      <div className="portfolio__sd-box-content mb-25">
                        <i className={item.icon}></i>
                        <h6>{item.title}</h6>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div> */}
                <HelpCtaArea />
                <div className="portfolio-slider mb-45">
                  <Fahrzeugbilder />
                </div>
                {/* <div className="portfolio-form">
                  <div className="section__title mb-30">
                    <h3 className="title-sm">Make Custom Request</h3>
                  </div>
                  <Form />
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <SidebarDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fahrzeugbeschreibung;
