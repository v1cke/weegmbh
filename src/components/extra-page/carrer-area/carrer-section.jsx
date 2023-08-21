import React from 'react';
import CarrerOne from '@assets/img/career/job-1.png';
import CarrerTwo from '@assets/img/career/job-2.png';
import CarrerThere from '@assets/img/career/job-7.png';
import CarrerFour from '@assets/img/career/job-6.png';
import CarrerFive from '@assets/img/career/job-8.png';
import CarrerSix from '@assets/img/career/job-11.png';
import Link from 'next/link';
import Image from 'next/image';

const CarrerSection = () => {
    const carrerData = [
        {
            id: 1,
            image: CarrerOne,
            tagNormal: 'Vollzeit',
            tagUrgent: 'sofort',
            contact: 'Triebfahrzeugführer (m/w/d)',
            link: 'https://www.google.com/maps/@52.2728538,8.0648412,3a,75y,58.68h,90t/data=!3m7!1e1!3m5!1sccTr3dQ8b3danr9wm-eIrg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DccTr3dQ8b3danr9wm-eIrg%26cb_client%3Dsearch.gws-prod.gps%26w%3D360%26h%3D120%26yaw%3D58.684254%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
            icon: 'far fa-map-marker-alt',
            iconTwo: 'fal fa-usd-circle',
            address: 'Franz-Lenz-Str. 1, 49084 Osnabrück',
            doller: '250 - 495'
        },
        {
            id: 2,
            image: CarrerTwo,
            tagNormal: 'Vollzeit',
            tagUrgent: 'sofort',
            contact: 'Rangierbegleiter (m/w/d)',
            link: 'https://www.google.com/maps/@52.2728538,8.0648412,3a,75y,58.68h,90t/data=!3m7!1e1!3m5!1sccTr3dQ8b3danr9wm-eIrg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DccTr3dQ8b3danr9wm-eIrg%26cb_client%3Dsearch.gws-prod.gps%26w%3D360%26h%3D120%26yaw%3D58.684254%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192?entry=ttu',
            icon: 'far fa-map-marker-alt',
            iconTwo: 'fal fa-usd-circle',
            address: 'Franz-Lenz-Str. 1, 49084 Osnabrück',
            doller: '250 - 495'
        },
    ]
    return (
        <section className="job-area pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-md-8">
                        <div className="section__title mb-55 text-center">
                            <span className="sub-title">Karriere</span>
                            <h2 className="title">Aktuell offene Stellen</h2>
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp" data-wow-delay=".5s">
                    {
                        carrerData.map((item) => (
                            <div className="col-xl-6 col-lg-6" key={item.id}>
                                <div className="job-wrapper mb-30">
                                    <div className="job-instructor-profile">
                                        <div className="job-instructor-img">
                                            <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="job" />
                                        </div>
                                        <div className="job-instructor-title">
                                            <div className="job-tag mb-20">
                                                <span className="tag-normal">{item.tagNormal}</span>
                                                <span className="tag-urgent">{item.tagUrgent}</span>
                                            </div>
                                            <h3>{item.contact}</h3>
                                            <div className="job-meta mt-15">
                                                <Link href={item.link}><span><i className={item.icon}></i> {item.address}</span></Link>
                                                {/* <span><i className={item.iconTwo}></i>{item.doller}</span> */}
                                            </div>
                                            <div className="job-btn-inner mt-30">
                                                <Link className="job-btn" href="/contact">jetzt bewerben</Link>
                                            </div>
                                        </div>
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

export default CarrerSection;