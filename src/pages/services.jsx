import ServicesMainArea from '@components/extra-page/services';
import SEO from '@components/seo';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'WEE Leistungsumfang'} />
            <HeaderOne headerClass={'header__two header__transparent menu-sticky'} />
            <ServicesMainArea />
            <FooterFour />
        </Wrapper>
    );
};

export default index;