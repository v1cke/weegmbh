import Image from "next/image";
import Link from "next/link";
import gallery_1 from "@assets/img/gallery/gallery-10.jpg";
import gallery_2 from "@assets/img/gallery/gallery-11.jpg";
import gallery_3 from "@assets/img/gallery/gallery-12.jpg";
import gallery_4 from "@assets/img/gallery/gallery-13.jpg";
import gallery_5 from "@assets/img/gallery/gallery-14.jpg";
import gallery_6 from "@assets/img/gallery/gallery-15.jpg";
import footerIcon from "@assets/img/footer/footer-icon-img.png";

const FooterTwo = () => {
  const portfolio_img = [
    {
      id: 1,
      image: gallery_1,
    },
    {
      id: 2,
      image: gallery_2,
    },
    {
      id: 3,
      image: gallery_3,
    },
    {
      id: 4,
      image: gallery_4,
    },
    {
      id: 5,
      image: gallery_5,
    },
    {
      id: 6,
      image: gallery_6,
    },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <footer>
      <section className="footer-area footer-area1 footer-area3 white-bg pt-100 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget footer2-widget footer2-widget1 mb-50 pr-20">
                <div className="footer-widget-title">
                  <h4>Über uns</h4>
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
                  {/* <ul>
                                        <li><Link href="/blog">News &amp; Insights</Link></li>
                                        <li><Link href="/faq">Refund Policy</Link></li>
                                        <li><Link href="#">Terms &amp; Conditions</Link></li>
                                    </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
              <div className="footer-widget footer3-widget footer3-widget3 mb-50 pr-45">
                <div className="footer-widget-title">
                  <h4>Subscribe us</h4>
                </div>
                <p className="mb-20">
                  Subscribe us &amp; receive our office &amp; update in your
                  inbox directly
                </p>
                <form
                  onSubmit={handleSubmit}
                  action="#"
                  className="subscribe-form subscribe-form-footer1"
                >
                  <div className="s-clip p-relative s-input mb-10">
                    <input type="text" placeholder="Enter your email" />
                    <i className="fas fa-envelope"></i>
                  </div>
                  <button type="submit">Subscribe Now</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
              <div className="footer-widget footer3-widget footer3-widget4 mb-50">
                <div className="footer-widget-title">
                  <h4>photo gallery</h4>
                </div>
                <div className="footer-photo-gallery">
                  {portfolio_img.slice(0, 6).map((item) => (
                    <div className="footer-photo-item" key={item.id}>
                      <Link href={`/portfolio-details/${item.id}`}>
                        <Image
                          src={item.image}
                          style={{ width: "100%", height: "auto" }}
                          alt="gallery"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterTwo;
