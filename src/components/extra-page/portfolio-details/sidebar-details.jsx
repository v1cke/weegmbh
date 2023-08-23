import Link from 'next/link';
import React from 'react';
import WidgetServices from './widget-services';
import SearchInput from './search-input';
import Docs from './docs';
import Contact from './contact';




const SidebarDetails = () => {
    return (
        <div className="service-details-sidebar mb-60">
            <SearchInput />
            <WidgetServices />
            {/* <Docs /> */}
            {/* <Contact /> */}
        </div>
    );
};

export default SidebarDetails;