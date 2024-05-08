import React from "react";
import Link from "next/link";
import Image from "next/image";
import brandData from "@data/brand-data";

//swiper style
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import { partnerData } from "@components/extra-page/partner/partner-area";

const BrandAreaSection = () => {
  return (
    <div
      className="brand white-bg two border-tb"
      style={{ position: "relative" }}
    >
      <div
        className="header__two-btn lh-1 t-right d-none d-xl-block"
        style={{
          position: "absolute",
          left: "50%",
          top: "-30px",
          transform: "translateX(-50%)",
        }}
      >
        <Link href="/partner" className="fill-btn clip-btn">
          unsere Partner
        </Link>
      </div>
      <div
        className="container-fluid p-0 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".3s"
      >
        <div className="brand-active-2">
          <div className="text-center">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={5}
              spaceBetween={150}
              loop={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              // Responsive breakpoints
              breakpoints={{
                1400: {
                  slidesPerView: 5,
                  spaceBetween: 120,
                },
                1200: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 100,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 70,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              {/* {brandData.slice(0, 5).map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="brand-items-2">
                      <Link href="#">
                        <Image
                          src={item.image}
                          style={{ width: "auto", height: "auto" }}
                          alt="Brand"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))} */}
              {partnerData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div>
                    <div className="brand-items-2">
                      <Link href={item.link} target="blank">
                        <Image
                          src={item.image}
                          style={{
                            width: "auto",
                            height: "45px",
                            objectFit: "contain",
                            layout: "responsive",
                            // maxHeight: "45px",
                          }}
                          alt="Brand"
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandAreaSection;
