import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import LocationArea from '@components/extra-page/location'
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Weser Ems Eisenbahngesellschaft'} />
                <HeaderOne headerClass={'header__two menu-sticky white-bg'} />
                <LocationArea />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default index;