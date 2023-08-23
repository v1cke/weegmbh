import SEO from '@components/seo';
import Wrapper from '@layout/wrapper';
import React from 'react';
import ContactArea from '@components/extra-page/contact';
import FooterOne from '@layout/footer/footer-1';
import HeaderOne from '@layout/header/header-one';

const index = () => {
    return (
        <>
            <Wrapper>
                <SEO pageTitle={'Weser Ems Eisenbahngesellschaft'} />
                <HeaderOne headerClass={'header__two menu-sticky header__transparent'} />
                <ContactArea />
                <FooterOne />
            </Wrapper>
        </>
    );
};

export default index;