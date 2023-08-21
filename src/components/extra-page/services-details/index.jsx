import React from 'react';
import ServiceDetails from './service-details';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';

const index = ({ item }) => {
    return (
        <main>
            <Breadcrumb title={'Leistungsbeschreibung'} subTitle={'Leistungsbeschreibung'} />
            <ServiceDetails item={item} />
        </main>
    );
};

export default index;