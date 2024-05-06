import Link from "next/link";
import React from "react";
import about_img from "@assets/img/about/ph.png";
import Image from "next/image";
import "react-modal-video/css/modal-video.min.css";
import VideoModal from "@components/common/modals/modal-video";
import useModal from "@hooks/use-modal";

const AboutUs = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <section
        className="about__area-2 pt-120 pb-60 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div
                className="about__content-2 mb-60 wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay=".5s"
              >
                <div className="section__title mb-50">
                  <span className="sub-title">Wer wir sind</span>
                  <h2 className="title">
                    Die Full-Service <br /> Eisenbahner
                  </h2>
                </div>
                <div className="about__content-tab-2 mt-40">
                  <ul className="nav mb-5" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active clip-lg-btn"
                        id="approch-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#approch"
                        type="button"
                        role="tab"
                        aria-controls="approch"
                        aria-selected="true"
                      >
                        Versprechen
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link clip-lg-btn"
                        id="goal-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#goal"
                        type="button"
                        role="tab"
                        aria-controls="goal"
                        aria-selected="false"
                      >
                        Aufgabe
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link clip-lg-btn"
                        id="mision-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#mision"
                        type="button"
                        role="tab"
                        aria-controls="mision"
                        aria-selected="false"
                      >
                        Ziel
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="approch"
                      role="tabpanel"
                      aria-labelledby="approch-tab"
                    >
                      <p style={{ minHeight: '208px' }}>
                        Wir bieten wir Ihnen erstklassige Lösungen, die die
                        gesamte Bandbreite des Eisenbahnwesens abdecken. Von
                        Fahrzeugvermietung, Baulogistik, Güterverkehr,
                        Ersatzverkehr und Touristikverkehr bis zur Miete von
                        Zügen und Personal, setzen wir Ihr Vertrauen in
                        bewährter Expertise um.
                      </p>

                    </div>
                    <div
                      className="tab-pane fade"
                      id="goal"
                      role="tabpanel"
                      aria-labelledby="goal-tab"
                    >
                      <p style={{ minHeight: '208px' }}>
                        Die Weser Ems Eisenbahn umfasst ein breites Spektrum an
                        Angeboten rund um die Eisenbahn-Branche. Egal, ob Sie
                        Züge, Personal oder beides benötigen. Wir haben das
                        passende Angebot. Sie möchten Ihre Angestellten
                        weiterbilden oder prüfen? Wir bieten dazu die nötigen
                        Räumlichkeiten, das Schulungspersonal sowie
                        entsprechende Züge und einen Simulator.
                      </p>

                    </div>
                    <div
                      className="tab-pane fade"
                      id="mision"
                      role="tabpanel"
                      aria-labelledby="mision-tab"
                    >
                      <p style={{ minHeight: '208px' }}>
                        Als Ausbildungs- und Prüfungslizenzinhaber für
                        Lokomotivführer legen wir einen starken Fokus auf die
                        Ausbildung und Weiterbildung von Fachkräften. Unsere
                        umfassende Erfahrung erstreckt sich auch auf die
                        Arbeitnehmerüberlassung und EVU-Dienstleistungen, die den
                        reibungslosen Betrieb Ihrer Bahninfrastruktur sicherstellen.
                      </p>

                    </div>
                  </div>

                  <div className="about__content-tab-btn mt-35">
                    <Link className="fill-btn clip-md-btn" href="/about-us">
                      mehr erfahren
                    </Link>
                  </div>


                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7">
              <div
                className="about__img-2 mb-60 ml-60 w-img p-relative wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay=".3s"
              >
                <Image
                  src={about_img}
                  style={{ width: "100%", height: "auto" }}
                  alt="About"
                />
                <div className="about__btn-2">
                  <button
                    type="button"
                    className="popup-video play-btn play-btn-white"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <i className="fas fa-play"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId="WKf3OEORLSM"
      />
    </>
  );
};

export default AboutUs;
