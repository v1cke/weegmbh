import Link from "next/link";
import React from "react";

const FooterFour = () => {
  return (
    <footer>
      <div className="footer-area p-relative footer-area1-bg pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget footer2-widget footer2-widget1 mb-50 pr-20">
                <div className="footer-widget-title">
                  <h4>about us</h4>
                </div>
                <p>
                  Weser Ems Eisenbahn Unternehmensgruppe. Die Full-Service
                  Eisenbahner
                </p>
                <div className="footer-social-link mt-40">
                  <ul>
                    <li>
                      <Link
                        target="blank"
                        href="https://www.facebook.com/weseremseisenbahn/"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="blank"
                        href="https://www.instagram.com/weseremseisenbahn/"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="blank"
                        href="https://www.youtube.com/channel/UCLKl7-9ga4vOF4KpEmSBw1w"
                      >
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget footer2-widget footer2-widget2 mb-50 pl-30">
                <div className="footer-widget-title">
                  <h4>Unternehmen</h4>
                </div>
                <div className="footer-widget-link">
                  <ul>
                    <li>
                      <Link href="/about-us">Über uns</Link>
                    </li>
                    <li>
                      <Link href="/services">Leistungen</Link>
                    </li>
                    <li>
                      <Link href="/career">Karriere</Link>
                    </li>
                    {/* <li><Link href="/team">Our Team</Link></li> */}
                    {/* <li><Link href="/pricing">Pricing</Link></li> */}
                    <li>
                      <Link href="/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget footer2-widget footer2-widget4 mb-50 pl-10 pr-40">
                <div className="footer-widget-title">
                  <h4>Rechtliches</h4>
                </div>
                <div className="footer-widget-link">
                  <ul>
                    <li>
                      <Link href="/contact">Kontakt</Link>
                    </li>
                    <li>
                      <Link href="/impressum">Impressum</Link>
                    </li>
                    <li>
                      <Link href="/datenschutz">Datenschutz</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget footer2-widget footer2-widget3 mb-50 pl-55">
                <div className="footer-widget-title">
                  <h4>Leistungen</h4>
                </div>
                <ul className="footer-widget-link-2">
                  <li>
                    <i className="fas fa-star"></i>
                    <Link href="/services-details/1">EVU Dienstleistungen</Link>
                  </li>
                  <li>
                    <i className="fas fa-play"></i>
                    <Link href="/services-details/2">Ausbildung</Link>
                  </li>
                  <li>
                    <i className="fas fa-user"></i>
                    <Link href="/services-details/3">
                      Arbeitnehmerüberlassung
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-train"></i>
                    <Link href="/services-details/4">Zugverkehr</Link>
                  </li>
                  <li>
                    <i className="fas fa-train"></i>
                    <Link href="/services-details/5">Fahrzeugvermietung</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
