import Link from "next/link";
import React from "react";

const LocationArea = () => {
  return (
    <div
      className="location-area pt-120 pb-80 wow fadeInUp"
      data-wow-delay=".3s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav>
              <div className="country-tab mb-40">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-tab-1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-tab-1"
                    type="button"
                    role="tab"
                    aria-controls="nav-tab-1"
                    aria-selected="true"
                  >
                    Deutschland
                  </button>
                  <button
                    className="nav-link"
                    id="nav-tab-2-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-tab-2"
                    type="button"
                    role="tab"
                    aria-controls="nav-tab-2"
                    aria-selected="false"
                  >
                    Niederlande
                  </button>
                </div>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-tab-1"
                role="tabpanel"
                aria-labelledby="nav-tab-1-tab"
              >
                <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="loaction-box mb-30">
                      <div className="laction-county">
                        <ul>
                          <li>
                            <span>
                              <Link href="#">
                                <i className="far fa-map-marker-alt"></i>
                              </Link>
                            </span>
                            <span>
                              <Link href="#">Osnabrück</Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-tab-2"
                role="tabpanel"
                aria-labelledby="nav-tab-2-tab"
              >
                <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="loaction-box mb-30">
                      <div className="laction-county">
                        <ul>
                          <li>
                            <span>
                              <Link href="#">
                                <i className="far fa-map-marker-alt"></i>
                              </Link>
                            </span>
                            <span>
                              <Link href="#">Venlo</Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationArea;
