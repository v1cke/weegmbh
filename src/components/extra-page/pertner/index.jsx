import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import PertnerArea from './pertner-area';

const index = () => {
    return (
        <main>
            <Breadcrumb title="Partner" subTitle="partner" />
            <PertnerArea />
        </main>
    );
};

export default index;