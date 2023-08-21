import React from 'react';
import brandOne from '@assets/img/brand/db.png';
import brandTwo from '@assets/img/brand/nef.jpeg';
import brandThere from '@assets/img/brand/captrain.png';
import brandFour from '@assets/img/brand/evb.png';
import brandFive from '@assets/img/brand/goahead.png';
import brandSix from '@assets/img/brand/vias.png';
import brandSeven from '@assets/img/brand/metronom.png';
import brandEight from '@assets/img/brand/rheincargo.png';
import Image from 'next/image';
import Link from 'next/link';

const PertnerArea = () => {
    const pertnerData = [
        {
            id: 1,
            image: brandOne,
            title: 'Deutsche Bahn',
            description: 'Die Deutsche Bahn AG ist ein bundeseigener Mobilitäts- und Transportkonzern mit dem Kerngeschäft Eisenbahn.',
            link: 'https://www.bahn.de/service/ueber-uns/umwelt',
        },
        {
            id: 2,
            image: brandTwo,
            title: 'Norddeutsche Eisenbahnfachschule',
            description: 'Die NEF ist offizieller Kooperationspartner der Deutschen Bahn für die fachgerechte Aus- und Weiterbildung von eisenbahnspezifischen Fachkräften.',
            link: 'https://www.meinezugunft.de/',
        },
        {
            id: 3,
            image: brandThere,
            title: 'Captrain',
            description: 'Captrain vermarktet logistischen Lösungen im Schienengüterverkehr für Industrie, Handel und Landwirtschaft.',
            link: 'https://www.meinezugunft.de/',
        },
        {
            id: 4,
            image: brandFour,
            title: 'EVB',
            description: 'Die EVB befördert Güter aller Art auf der Schiene in der Region und deutschlandweit.',
            link: 'https://www.evb-elbe-weser.de/',
        },
        {
            id: 5,
            image: brandFive,
            title: 'Go-Ahead',
            description: 'Go-Ahead ist ein führendes öffentliches Verkehrsunternehmen, das Kommunen durch Bus- und Bahndienste miteinander verbindet.',
            link: 'https://www.go-ahead-bahn.de/',
        },
        {
            id: 6,
            image: brandSix,
            title: 'Vias',
            description: 'Die VIAS ist ein Unternehmen der RATH Gruppe. Die RATH Gruppe bietet neben dem Schienenpersonennahverkehr eine große Anzahl weiterer Verkehrsdienstleistungen, speziell auf der Schiene, an.',
            link: 'https://www.vias-online.de/',
        },
        {
            id: 7,
            image: brandSeven,
            title: 'Metronom',
            description: 'Die Metronom Eisenbahngesellschaft mbH ist ein nichtbundeseigenes Eisenbahnverkehrsunternehmen mit Sitz in Uelzen und zählt mit täglich über 100.000 Fahrgästen zu den größten Privatbahnen Deutschlands.',
            link: 'https://www.der-metronom.de/',
        },
        {
            id: 8,
            image: brandEight,
            title: 'RheinCargo',
            description: 'Auf der Schiene, der Wasserstraße und im Hafen: RheinCargo heißt Logistik nach Maß. Wir bieten das jeweils passende Konzept für Ihre Anforderungen. Auf Sie zugeschnitten und clever kombiniert.',
            link: 'https://www.rheincargo.com/',
        },
    ]
    return (
        <section className="partner-area pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-md-8">
                        <div className="section__title mb-55 text-center">
                            <span className="sub-title">Partner</span>
                            <h2 className="title">Stolzer Partner von</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".5s">
                    {
                        pertnerData.map((item) => (
                            <div className="col-xl-4 col-md-6" key={item.id}>
                                <div className="partner-item mb-30">
                                    <div className="partner-thumb">
                                        <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="certificate-image" />
                                    </div>
                                    <div className="partner-content">
                                        <h3><Link href={item.link}>{item.title}</Link></h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default PertnerArea;