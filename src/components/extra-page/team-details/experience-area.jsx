import Link from "next/link";
import React from "react";
import Image from "next/image";

const ExperienceArea = ({ item }) => {
  return (
    <>
      <div className="col-12">
        <div className="row align-items-center">
          <div
            className="col-lg-5 col-md-12 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".3s"
          >
            <div className="tmd-img w-img p-relative mb-50">
              {item?.image && (
                <Image
                  src={item?.image}
                  style={{ width: "100%", height: "auto" }}
                  alt="team"
                />
              )}
            </div>
          </div>
          <div
            className="col-lg-7 col-md-12 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".3s"
          >
            <div className="tmd__content mb-50">
              <div className="section__title td-section-title mb-25">
                <span className="sub-title">
                  {item?.desination && item?.desination}
                </span>
                {item?.name && <h2 className="title">{item?.name}</h2>}
                <p>{item?.shortdesc}</p>
              </div>

              <div className="team__founder-info mb-45">
                {item?.phone && (
                  <div className="team__founder-item">
                    <Link href={item?.phone}>
                      <div className="team__founder-item-icon">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                    </Link>
                    <div className="team__founder-text">
                      <span className="title">Telefon</span>
                      <h4 className="contact">
                        <Link href={item?.phone}>{item?.phonetext}</Link>
                      </h4>
                    </div>
                  </div>
                )}
                {item?.mail && (
                  <div className="team__founder-item">
                    <Link href={item?.mail}>
                      {" "}
                      <div className="team__founder-item-icon">
                        <i className="fas fa-envelope-open"></i>
                      </div>
                    </Link>
                    <div className="team__founder-text">
                      <span className="title">Email</span>
                      <h4 className="contact">
                        <Link href={item?.mail}>{item?.mailtext}</Link>
                      </h4>
                    </div>
                  </div>
                )}
                {item?.adress && (
                  <div className="team__founder-item">
                    <Link href={item?.hrefAdress} target="blank">
                      {" "}
                      <div className="team__founder-item-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                    </Link>
                    <div className="team__founder-text">
                      <span className="title">Büro-Adresse</span>
                      <h4 className="contact">
                        <Link href={item?.hrefAdress} target="blank">
                          {item?.adress}
                        </Link>
                      </h4>
                    </div>
                  </div>
                )}
              </div>

              {item?.mail && (
                <div className="tmd__content-btn">
                  <Link href={item?.mail} className="fill-btn clip-btn">
                    Kontakt
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-12 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".3s"
      >
        <div className="tmd__qualification mb-45">
          <div className="section__title mb-20">
            <h3 className="title-sm">Karriere</h3>
          </div>
          <p>{item?.experience}</p>
        </div>
      </div>
    </>
  );
};

export default ExperienceArea;
