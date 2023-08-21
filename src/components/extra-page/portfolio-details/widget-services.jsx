import Link from 'next/link';
import React from 'react';

const WidgetServices = () => {
    return (
        <div className="sidebar__widget mb-40">
            <div className="sidebar-title mb-25">
                <h4>Unsere Leistungen</h4>
            </div>
            <ul className="widget-services">
                <li><Link href="/services"><i className="fas fa-star"></i> EVU Dienstleistung</Link></li>
                <li><Link href="/services"><i className="fas fa-play"></i> Ausbildung</Link></li>
                <li><Link href="/services"><i className="fas fa-user"></i> Arbeitnehmer</Link></li>
                <li><Link href="/services"><i className="fas fa-train"></i> Zugverkehr</Link></li>
                <li><Link href="/services"><i className="fas fa-train"></i> Ersatzverkehr</Link></li>
                <li><Link href="/services"><i className="fas fa-train"></i> Fahrzeugvermietung</Link></li>
            </ul>
        </div>
    );
};

export default WidgetServices;