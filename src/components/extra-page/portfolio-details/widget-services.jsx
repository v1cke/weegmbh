import Link from 'next/link';
import React from 'react';

const WidgetServices = () => {
    return (
        <div className="sidebar__widget mb-40">
            <div className="sidebar-title mb-25">
                <h4>Unsere Leistungen</h4>
            </div>
            <ul className="widget-services">
                <li><Link scroll={false} href="/services-details/1"><i className="fas fa-star"></i> EVU Dienstleistung</Link></li>
                <li><Link scroll={false} href="/services-details/2"><i className="fas fa-play"></i> Ausbildung</Link></li>
                <li><Link scroll={false} href="/services-details/3"><i className="fas fa-user"></i> Arbeitnehmer</Link></li>
                <li><Link scroll={false} href="/services-details/4"><i className="fas fa-train"></i> Zugverkehr</Link></li>
                <li><Link scroll={false} href="/services-details/5"><i className="fas fa-train"></i> Fahrzeugvermietung</Link></li>
                {/* <li><Link href="/services-details/6"><i className="fas fa-train"></i> Ersatzverkehr</Link></li> */}
            </ul>
        </div>
    );
};

export default WidgetServices;