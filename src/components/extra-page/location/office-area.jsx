import Link from 'next/link';
import React from 'react';

const OfficeArea = () => {
    const officeData = [
        {
            id: 1,
            officeName: 'Büro Osnabrück:',
            link: 'https://www.google.com/maps/place/Franz-Lenz-Stra%C3%9Fe+1,+49084+Osnabr%C3%BCck/@52.272962,8.0625574,17z/data=!3m1!4b1!4m6!3m5!1s0x47b9e59e067d15f7:0x3365287d34a6b349!8m2!3d52.2729587!4d8.0651323!16s%2Fg%2F11c1zssr4h?entry=ttu',
            status: 'Franz-Lenz-Str. 1, 49084 Osnabrück',
            mailAddress: 'mailto:info@wee.gmbh',
            email: 'info@wee.gmbh',
            tel: 'tel: +49541 4444040',
            number: '(0541) 4444040'
        },
        {
            id: 2,
            officeName: 'Büro Venlo:',
            link: 'https://www.google.com/maps/place/Sablones+Venlo/@51.3639555,6.174611,45m/data=!3m1!1e3!4m14!1m7!3m6!1s0x47c75abce465fd29:0x3ed005669e314687!2sVenlo!8m2!3d51.3652077!4d6.1715742!16s%2Fm%2F026_zyb!3m5!1s0x47c75abd44b82583:0x653db0dd1c951392!8m2!3d51.3639261!4d6.1744778!16s%2Fg%2F12qfxqj3v?entry=ttu',
            status: 'Kaldenkerkerweg 20, 5913 AE Venlo, Niederlande',
            mailAddress: 'mailto:info@wee.gmbh',
            email: 'info@wee.gmbh',
            tel: 'tel: +49541 4444040',
            number: '(0541) 4444040'
        },
    ]

    return (
        <section className="office-location-area pt-190 pb-180 p-relative">
            <div className="office-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2419.686812772823!2d8.235905876689982!3d52.66563427209968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b74f567a9a457f%3A0x385bb7132284cd43!2sWeser%20Ems%20Eisenbahn%20GmbH%20(WEE)!5e0!3m2!1sde!2sde!4v1692353135542!5m2!1sde!2sde" width="600" height="450"></iframe>
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-xxl-7 col-xl-7">
                            <div className="office-wrapper">
                                {
                                    officeData.map((item) => (
                                        <div className="office-item" key={item.id}>
                                            <h4>{item.officeName}</h4>
                                            <div className="office-content">
                                                <div className="singel-addresss">
                                                    <Link href={item.link}><span><i className="far fa-map-marker-alt"></i></span><span>{item.status}</span></Link>
                                                </div>
                                                <div className="singel-addresss">
                                                    <Link href={item.mailAddress}><span><i className="far fa-envelope"></i></span><span>{item.email}</span></Link>
                                                </div>
                                                <div className="singel-addresss">
                                                    <Link href={item.tel}><span><i className="far fa-phone-alt"></i></span><span>{item.number}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeArea;