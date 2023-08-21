import React from 'react';
import AboutUsTwo from '@components/home-2/about-us-two';
import ServicesAreaTwo from '@components/home-2/services-area-two';
import MissionSection from './mission-section';
import ApproachArea from './approach-area';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import BrandSection from './brand-section';

const index = () => {
    return (
        <main>
            <Breadcrumb title={'Über uns'} subTitle={'Über uns'} />
            <AboutUsTwo />
            <ServicesAreaTwo />
            <ApproachArea />
            <MissionSection />
            {/* <BrandSection /> */}
        </main>
    );
};

export default index;