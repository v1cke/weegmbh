import PortfolioMainArea from '@components/extra-page/portfolio';
import SEO from '@components/seo';
import FooterFour from '@layout/footer/footer-4';
import HeaderOne from '@layout/header/header-one';
import Wrapper from '@layout/wrapper';
import React from 'react';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'WEE Züge / Fuhrpark'} />
                <HeaderOne headerClass={'header__two menu-sticky header__transparent'} />
                <PortfolioMainArea />
                <FooterFour />
            </Wrapper>
        </>
    );
};

export default index;