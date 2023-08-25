import React from 'react';
import Image from 'next/image';
import review_data from '@data/review-data';

const AccordionArea = () => {
    const accordion_data = [
        {
            id: 1,
            id_2: "headingOne",
            btn: "accordion-button",
            aria_expanded: "true",
            style: "accordion-collapse collapse show",
            data_base_target: "#collapseOne",
            aria_controls: "collapseOne",
            btn_name: "Welche Regionen decken Sie im Güterverkehr ab?",
            description:
              "Als Full-Service Agentur bieten wir Verkehre sowohl regional als auch bundesweit an. Auch grenzüberschreitende Transporte sind nach Absprache möglich.",
          },
          {
            id: 2,
            id_2: "headingTwo",
            btn: "accordion-button collapsed",
            aria_expanded: "false",
            style: "accordion-collapse collapse",
            aria_controls: "collapseTwo",
            data_base_target: "#collapseTwo",
            btn_name:
              "Wie gewährleisten Sie einen reibungslosen Ersatzverkehr im Falle von Störungen?",
            description:
              "Wir haben nicht nur einen eigenen Pool an Fahrzeugen, sondern aufgrund unserer langjährigen Zusammenarbeit auch Zugriff auf Fahrzeuge andere Unternehmen, die im Falle von Auftragsspritzen und Noteinsätzen organisiert werden können.",
          },
          {
            id: 3,
            id_2: "headingThree",
            aria_expanded: "false",
            btn: "accordion-button collapsed",
            style: "acaccordion-collapse collapse",
            aria_controls: "collapseThree",
            data_base_target: "#collapseThree",
            btn_name: "Bieten Sie verschiedene Arten von Zügen zur Vermietung an?",
            description:
              "Neben Lokomotiven und Triebfahrzeugen, besitzen wir auch ein breites Spektrum an verschiedenen Wagen wie z.B. Reisezugwagen, Steuerwagen und Flachwagen für Gütertransporte.",
          },
          {
            id: 4,
            id_2: "headingFour",
            aria_expanded: "false",
            btn: "accordion-button collapsed",
            style: "accordion-collapse collapse",
            aria_controls: "collapseFour",
            data_base_target: "#collapseFour",
            btn_name: "Wie sieht das Ausbildungsprogramm für Lokomotivführer aus?",
            description:
              "Mit unserem Triebfahrzeug-Simulator, den Ausbildungsräumen und der Gleisanlage im Bahnhof Ankum, bieten wir regelmäßig theoretische und praktische Ausbildungen an. Auch stellen wir diese anderen Unternehmen zur Verfügung. Wir beschäftigen mehrere Prüfer nach TfV, die für Sie gerne die praktische und theoretische Prüfung durchführen.",
          },
          {
            id: 5,
            id_2: "headingFive",
            style: "accordion-collapse collapse",
            aria_expanded: "false",
            btn: "accordion-button collapsed",
            aria_controls: "collapseFive",
            data_base_target: "#collapseFive",
            btn_name: "Können wir auf kurzfristige Basis Fachkräfte über Ihre Arbeitnehmerüberlassung beziehen?",
            description:
              "Bei Auftragsspitzen oder Personalnot springen unsere gut ausgebildeten Mitarbeiter gerne ein. Diese verfügen neben fundierten Fahrzeugkenntnissen über Erfahrungen auf Güter- und Personenzüge.",
          },
    ]





    return (
        <section className="acc-testi grey-bg-3 pt-120 pb-35 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="accordion__wrapper accordion__wrapper-1 mb-85 mr-40">
                            <div className="accordion" id="accordionExample">
                                {
                                    accordion_data.map((item) => (
                                        <div className="accordion-item" key={item.id}>
                                            <h2 className="accordion-header">
                                                <button className={item.btn} type="button" data-bs-toggle="collapse"
                                                    data-bs-target={item.data_base_target} aria-expanded={item.aria_expanded} aria-controls={item.aria_controls}>
                                                    {item.btn_name}
                                                </button>
                                            </h2>
                                            <div id={item.aria_controls} className={item.style} aria-labelledby={item.id_2}
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial-two mb-85">
                            {
                                review_data.slice(3, 5).map((item) => (
                                    <div className="testimonial__item p-relative mb-60" key={item.id}>
                                        <div className="testimonial__item-img f-left">
                                            <Image src={item.image} style={{ width: '100%', height: 'auto' }} alt="Testimonial" />
                                        </div>
                                        <div className="testimonial__item-content white-bg fix">
                                            <p>
                                                {item.description}
                                            </p>
                                            <div className="testimonial__item-bottom">
                                                <div className="testimonial__item-auth">
                                                    <h4>{item.name}</h4>
                                                    <h6>{item.title}</h6>
                                                </div>
                                                <div className="testimonial__item-rate">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccordionArea;