import React from 'react';
import PortfolioSection from './portfolio-section';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = () => {
    return (
        <main>
            <Breadcrumb title={'Fahrzeuge'} subTitle={'Fahrzeuge'} />
            <PortfolioSection />
        </main>
    );
};

export default index;