import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenus from "./mobile-menus";
import logo from "@assets/img/logo/logo_dark50.png";

const OffCanvasMain = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div
        className={`sidebar__area ${isOffCanvasOpen ? "sidebar-opened" : ""}`}
      >
        <div className="sidebar__wrapper">
          <div></div>
          <div className="sidebar__close">
            <button
              className="sidebar__close-btn"
              id="sidebar__close-btn"
              onClick={() => setIsOffCanvasOpen(false)}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div
            className="sidebar__content"
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div className="sidebar__logo mb-40">
                <Link href="/">
                  <Image
                    src={logo}
                    style={{ width: "auto", height: "auto" }}
                    alt="Logo"
                  />
                </Link>
              </div>

              <div className="mobile-menu fix mb-10 mean-container">
                <div className="mean-bar">
                  <MobileMenus />
                </div>
              </div>
            </div>
            <div>
              <div className="sidebar__contact mt-30 mb-30">
                <div className="sidebar__info fix">
                  <div className="sidebar__info-item">
                    <div className="sidebar__info-icon">
                      <i className="flaticon-telephone-call"></i>
                    </div>
                    <div className="sidebar__info-text">
                      <span>Telefon</span>
                      <h5>
                        <a href="tel:+495414444040">+49 541 4444040</a>
                      </h5>
                    </div>
                  </div>
                  <div className="sidebar__info-item">
                    <div className="sidebar__info-icon">
                      <i className="flaticon-envelope"></i>
                    </div>
                    <div className="sidebar__info-text">
                      <span>Email</span>
                      <h5>
                        <a href="mailto:info@wee.gmbh">info@wee.gmbh</a>
                      </h5>
                    </div>
                  </div>
                  <div className="sidebar__info-item">
                    <div className="sidebar__info-icon">
                      <i className="flaticon-pin"></i>
                    </div>
                    <div className="sidebar__info-text">
                      <span>Franz-Lenz-Str. 1, 49084 Osnabrück</span>
                      <h5>Niedersachsen, Deutschland</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar__social">
                <ul>
                  <li>
                    <Link
                      href="https://www.facebook.com/weseremseisenbahn/"
                      target="blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/weseremseisenbahn/"
                      target="blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/channel/UCLKl7-9ga4vOF4KpEmSBw1w"
                      target="blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`}
        onClick={() => setIsOffCanvasOpen(false)}
      ></div>
    </React.Fragment>
  );
};

export default OffCanvasMain;
