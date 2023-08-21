import React from 'react';
import approch_img from '@assets/img/approach/approach.jpg';
import Image from 'next/image';

const ApproachArea = () => {
    return (
        <section className="approach__area fix grey-bg-4">
            <div className="approach__img m-img">
                <Image src={approch_img} style={{ width: "100%", height: "auto" }} alt="approach" />
            </div>
            <div className="container">
                <div className="row g-0 justify-content-end">
                    <div className="col-lg-6">
                        <div className="approach__content wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                            <div className="section__title mb-35">
                                <span className="sub-title">Unser Versprechen</span>
                                <h2 className="title">100% Verlässlichkeit
                                </h2>
                            </div>
                            <div className="approach__text">
                                <p>Die Weser Ems Eisenbahn Unternehmensgruppe ist ein velässlicher Partner, der eine breite Palette von Dienstleistungen im Bereich der Eisenbahnwelt anbietet.
                                </p>
                                <ul>
                                    <li><i className="fal fa-check-circle"></i>Ausbildungs-Expertise</li>
                                    <li><i className="fal fa-check-circle"></i>Prüfungs-Expertise</li>
                                    <li><i className="fal fa-check-circle"></i>Fahrzeug-Expertise</li>
                                    <li><i className="fal fa-check-circle"></i>Personal-Dienstleistungen</li>
                                    <li><i className="fal fa-check-circle"></i>EVU-Dienstleistungen</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApproachArea;