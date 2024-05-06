import Link from "next/link";
import React from "react";
// import about_img_2 from "@assets/img/about/aboutus2.jpg";
import about_img_3 from "@assets/img/about/aboutus.jpg";
import Image from "next/image";

const AboutUsTwo = () => {
  return (
    <section className="about__3 about__gray-bg p-relative pt-60 pb-60">
      <div className="container">
        <div
          className="row align-items-center wow fadeInU"
          data-wow-duration="1.5s"
          data-wow-delay=".3s"
        >
          <div className="col-xl-6 col-lg-6">
            <div className="about__3-img-wrapper p-relative mb-60">
              {/* <div className="about__3-top w-img">
                <Image
                  src={about_img_2}
                  style={{ width: "100%", height: "auto" }}
                  alt={"About"}
                />
              </div> */}
              <div className="about__3-main w-img">
                <Image
                  src={about_img_3}
                  style={{ width: "100%", height: "auto" }}
                  alt={"About"}
                />
              </div>
              <div className="about__3-text clip-box-sm">
                <span>
                  <i className="far fa-trophy-alt"></i>
                </span>
                {/* TODO: anzahl der Jahre variabel machen */}
                <h4 className="about__3-title">Über 10 Jahre Erfahrung</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about__3-content mb-60">
              <div className="section__title mb-30">
                <span className="sub-title">Über uns</span>
                <h2 className="title">
                  Ein Full-Service <br />
                  Eisenbahn Unternehmen
                </h2>
              </div>
              <div className="about__3-content-inner p-relative">
                <div >
                  <p>
                    Wir bieten wir Ihnen erstklassige Lösungen, die die gesamte
                    Bandbreite des Eisenbahnwesens abdecken.
                  </p>
                  <p>
                    Unsere Kompetenzen umfassen unter anderem die
                    Fahrzeugvermietung, Baulogistik, Güterverkehr, Ersatzverkehr
                    und Touristikverkehr. Von der Miete von Zügen und Personal
                    bis zur nahtlosen Logistik für Bauprojekte setzen wir Ihr
                    Vertrauen in bewährte Expertise um.
                  </p>
                  <p>
                    Als Ausbildungs- und Prüfungslizenzinhaber für
                    Lokomotivführer legen wir einen starken Fokus auf die
                    Ausbildung und Weiterbildung von Fachkräften. Unsere
                    umfassende Erfahrung erstreckt sich auch auf die
                    Arbeitnehmerüberlassung und EVU-Dienstleistungen, die den
                    reibungslosen Betrieb Ihrer Bahninfrastruktur sicherstellen.
                  </p>
                  {/* TODO: muss dieser button sein? */}
                  <div className="about__3-content-btn mt-35">
                    <Link href="/services" className="skew-btn">
                      Mehr Info
                    </Link>
                  </div>
                </div>
                {/* <div className="about__3-content-right">
                  <div className="about__3-shadow">
                    <div className="about__3-content-num">
                      <h2>20</h2>
                      <h6>Project done</h6>
                    </div>
                  </div>
                  <div className="about__3-shadow">
                    <div className="about__3-content-num">
                      <h2>31</h2>
                      <h6>star ratings</h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
