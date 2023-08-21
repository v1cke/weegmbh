import Link from "next/link";
import React from "react";
import mission_img from "@assets/img/mission/school.jpg";
import mission_contact from "@assets/img/mission/logo-klein.png";
import Image from "next/image";

const MissionSection = () => {
  return (
    <section className="mission__area p-relative fix grey-bg-4 mb-120">
      <div className="mission__img m-img">
        <Image
          src={mission_img}
          style={{ width: "100%", height: "auto" }}
          alt="mission"
        />
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6">
            <div
              className="mission__content wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".3s"
            >
              <div className="section__title mb-35">
                <span className="sub-title">Unser Ziel</span>
                <h2 className="title">Unsere Eisenbahn-Expertise</h2>
              </div>
              <div className="mission__text">
                <p>
                  Die Weser Ems Eisenbahn umfasst ein breites Spektrum an
                  Angeboten rund um die Eisenbahn-Branche. Egal, ob Sie Züge,
                  Personal oder beides benötigen. Wir haben das passende
                  Angebot. Sie möchten Ihre Angestellten weiterbilden oder
                  prüfen? Wir bieten dazu die nötigen Räumlichkeiten, das
                  Schulungspersonal sowie entsprechende Züge und einen
                  Simulator.
                </p>
                <div className="mission__text-inner">
                  <Image
                    src={mission_contact}
                    style={{ width: "auto", height: "auto" }}
                    alt="mission"
                  />
                  <div className="mission__text-contact">
                    <div className="single-contact-info d-flex align-items-center">
                      <div className="contact-info-icon">
                        <Link href="mailto:info@wee.gmbh">
                          <i className="flaticon-envelope"></i>
                        </Link>
                      </div>
                      <div className="contact-info-text">
                        <span>Email senden</span>
                        <h5>
                          <Link href="mailto:info@wee.gmbh">info@wee.gmbh</Link>{" "}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
