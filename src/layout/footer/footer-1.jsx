import Link from 'next/link';
import React from 'react';
import bg_1 from '@assets/img/cta/contact1.jpg';
import bg_2 from '@assets/img/cta/contact2.jpg';

const FooterOne = () => {

    const footer_data = [
        {
            id: 1,
            title: 'Telefon',
            img: bg_1,
            contact: 'tel:+495414444040',
            call_num: '+49 541 4444040',
            icon: 'flaticon-telephone-call',
        },
        {
            id: 2,
            title: 'E-mail',
            img: bg_2,
            contact: 'mailto:info@wee.gmbh',
            call_num: 'info@wee.gmbh',
            icon: 'flaticon-envelope',
        },
    ]

    const handleSubmit = (e) => {
        e.prevenDefault()
    }
    return (
        <footer>
            <div className="footer-area footer__padd-1 p-relative footer-area1-bg pt-150 pb-50">
                <div className="call__cta position p-absolute">
                    <div className="container">
                        <div className="row">
                            {
                                footer_data.map((item) => (
                                    <div className="col-lg-6" key={item.id}>
                                        <div className="call__cta-wrapper call__cta-padd overlay overlay-red clip-box bg-css"
                                            style={{ backgroundImage: `url(${item.img.src})` }}>
                                            <div className="call__cta-content">
                                                <h6 className="call__cta-content-small-title">{item.title}</h6>
                                                <h3 className="call__cta-content-title"><Link href={item.contact}>{item.call_num}</Link></h3>
                                            </div>
                                            <div className="call__cta-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget1 mb-50 pr-20">
                                <div className="footer-widget-title">
                                    <h4>Socials</h4>
                                </div>
                                <p>Weser Ems Eisenbahn Unternehmensgruppe. Die Full-Service Eisenbahner
                                </p>
                                <div className="footer-social-link mt-40">
                                    <ul>
                                        <li><Link href="https://www.facebook.com/weseremseisenbahn/"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="https://www.instagram.com/weseremseisenbahn/"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link href="https://www.youtube.com/channel/UCLKl7-9ga4vOF4KpEmSBw1w"><i className="fab fa-youtube"></i></Link></li>
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
                                        <li><Link href="/about-us">Über uns</Link></li>
                                        <li><Link href="/services">Leistungen</Link></li>
                                        <li><Link href="/career">Karriere</Link></li>
                                        {/* <li><Link href="/team">Our Team</Link></li> */}
                                        {/* <li><Link href="/pricing">Pricing</Link></li> */}
                                        <li><Link href="/faq">FAQ</Link></li>
                                    </ul>
                                    {/* <ul>
                                        <li><Link href="/blog">News &amp; Insights</Link></li>
                                        <li><Link href="/faq">Refund Policy</Link></li>
                                        <li><Link href="#">Terms &amp; Conditions</Link></li>
                                    </ul> */}
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
                                    <li><Link href="/contact">Kontakt</Link></li>
                                        <li><Link href="/impressum">Impressum</Link></li>
                                        <li><Link href="/datenschutz">Datenschutz</Link></li>
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
                                    <li><i className="fas fa-truck"></i><Link href="/services-details/1">EVU Dienstleistungen</Link></li>
                                    <li><i className="fas fa-cogs"></i><Link href="/services-details/2">Ausbildung</Link></li>
                                    <li><i className="fas fa-box"></i><Link href="/services-details/3">Arbeitnehmerüberlassung</Link></li>
                                    <li><i className="fas fa-plane"></i><Link href="/services-details/4">Zugverkehr</Link></li>
                                    <li><i className="fas fa-ship"></i><Link href="/services-details/5">Fahrzeugvermietung</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="footer-menu-area red-bg">
                <div className="container">
                    <div className="footer-menu-box two">
                        <div className="row align-items-center">
                            <div className="col-xxl-7 col-lg-5 ">
                                <div className="footer-menu mb-15">
                                    <nav>
                                        <ul>
                                            <li><Link href="/faq">terms & conditions</Link></li>
                                            <li><Link href="/faq">FAQ</Link></li>
                                            <li><Link href="/career">careers</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-lg-7">
                                <div className="copy-right-text-2 mb-15">
                                    <p>Copyright & design by <Link href="https://themeforest.net/user/bdevs/portfolio?gclid=EAIaIQobChMIhYCnudmz_wIVWRxyCh2NoQvLEAAYASAAEgJTaPD_BwE">@bdevs</Link> - 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
    );
};

export default FooterOne;