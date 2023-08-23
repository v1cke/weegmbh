import Link from 'next/link';
import React from 'react';

const FooterFour = () => {
    return (
        <footer>
            <div className="footer-area p-relative footer-area1-bg pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget1 mb-50 pr-20">
                                <div className="footer-widget-title">
                                    <h4>about us</h4>
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
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
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
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget3 mb-50 pl-55">
                                <div className="footer-widget-title">
                                    <h4>Leistungen</h4>
                                </div>
                                <ul className="footer-widget-link-2">
                                    <li><i className="fas fa-truck"></i><Link href="/services">EVU Dienstleistungen</Link></li>
                                    <li><i className="fas fa-cogs"></i><Link href="/services">Ausbildung</Link></li>
                                    <li><i className="fas fa-box"></i><Link href="/services">Arbeitnehmerüberlassung</Link></li>
                                    <li><i className="fas fa-plane"></i><Link href="/services">Zugverkehr</Link></li>
                                    <li><i className="fas fa-ship"></i><Link href="/services">Fahrzeugvermietung</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget footer2-widget footer2-widget4 mb-50 pl-10 pr-40">
                                <div className="footer-widget-title">
                                    <h4>Subscribe us</h4>
                                </div>
                                <p className="mb-20">Subscribe us & receive our office & update in your inbox directly</p>
                                <form action="#" className="subscribe-form subscribe-form-footer1">
                                    <div className="s-clip p-relative s-input mb-10">
                                        <input type="text" placeholder="Enter your email" />
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <button type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div> */}
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
                                            <li><Link href="#">terms & conditions</Link></li>
                                            <li><Link href="/faq">FAQ</Link></li>
                                            <li><Link href="/career">careers</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-lg-7">
                                <div className="copy-right-text-2 mb-15">
                                    <p>Copyright & design by <Link href="https://themeforest.net/user/bdevs/portfolio?gclid=EAIaIQobChMInPX85syz_wIVDWArCh190QGEEAAYASAAEgJetPD_BwE">@bdevs</Link> - 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </footer>
    );
};

export default FooterFour;