
import AboutUsArea from '@components/extra-page/about-us';
import SEO from '@components/seo';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Weser Ems Eisenbahngesellschaft'} />
                <HeaderOne headerClass={'header__two menu-sticky header__transparent'} />
                <AboutUsArea />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default index;