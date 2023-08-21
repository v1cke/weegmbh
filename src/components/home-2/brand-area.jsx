import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import brandData from '@data/brand-data';

//swiper style
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/bundle';

const BrandArea = () => {
    return (
        <div className="brand__3 pt-70 pb-70">
            <div className="container">
                <div className="brand-3-active">
                    <div className="wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}

                            autoplay={{
                                delay: 3000,
                                pauseOnMouseEnter: true,
                            }}
                            // Responsive breakpoints
                            breakpoints={{
                                1400: {
                                    slidesPerView: 5,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {
                                brandData.slice(6, 12).map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div>
                                            <div className="brand__3-items">
                                                <Link href="#"><Image src={item.image} style={{ width: 'auto', height: 'auto' }} alt='Brand' /></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BrandArea;