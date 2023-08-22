import React from 'react';
import portfolio_img from '@assets/img/portfolio/portfolio-details-img-2.jpg';
import Image from 'next/image';

const ServiceContent = ({ item }) => {
    return (
        <>
            <div className="section__title mb-20">
                <h3 className="title-sm">{item?.title && item.title}</h3>
            </div>
            <p className="content-para">{item?.description_1}
            </p>
            <div className="row align-items-center overview-list">
                {/* <div className="col-sm-6">
                    <div className="overview-list-img w-img mb-25">
                        <Image src={item?.image} style={{ width: "100%", height: "100%" }} alt="portfolio" />
                    </div>
                </div> */}
                <div className="col-sm-6">
                    <ul className="mb-25">
                        <li>Integrated Shipping</li>
                        <li>Logistics Services</li>
                        <li>Product Distribution</li>
                        <li>Product Sustainability</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ServiceContent;