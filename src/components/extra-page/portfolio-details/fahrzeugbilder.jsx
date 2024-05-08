import React from "react";
import img_1 from "@assets/img/gallery/143.jpg";
import img_2 from "@assets/img/gallery/216.jpg";
import img_3 from "@assets/img/gallery/626.jpg";
import img_4 from "@assets/img/gallery/rangierlokv65.jpg";
import img_5 from "@assets/img/gallery/steuerwagen_bnrbdzf.png";
import img_6 from "@assets/img/gallery/flachwagen.jpg";
import img_7 from "@assets/img/gallery/mittelwagen.jpg";

//swiper
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import Image from "next/image";
SwiperCore.use([Pagination]);

const Fahrzeugbilder = () => {
  const portfolioImage = [
    {
      id: 1,
      image: img_1,
    },
    {
      id: 2,
      image: img_2,
    },
    {
      id: 3,
      image: img_3,
    },
    {
      id: 4,
      image: img_4,
    },
    {
      id: 5,
      image: img_5,
    },
    {
      id: 6,
      image: img_6,
    },
    {
      id: 7,
      image: img_7,
    },
  ];
  return (
    <div className="portfolio-box">
      <div className="swiper-container portfolio-slider-active mb-20">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Pagination]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            pagination={{
              el: ".portfolio-slider-pagination",
              clickable: true,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {portfolioImage.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-slide">
                  <div className="portfolio-slider-item">
                    <Image
                      src={item.image}
                      style={{ width: "100%", height: "100%" }}
                      alt="portfolio"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="portfolio-slider-pagination"></div>
    </div>
  );
};

export default Fahrzeugbilder;
