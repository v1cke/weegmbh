import Link from 'next/link';
import React from 'react';
import logo from '@assets/img/logo/logo_dark200.png'
import Image from 'next/image';

const Contact = () => {
    return (
        <div className="sidebar__widget black-bg sidebar-contact text-center">
            <Image src={logo} style={{ width: "auto", height: "auto", marginBottom: "20px" }} alt="logo" />

            <p>Haben Sie eine andere Frage?</p>
            <p>Rufen Sie uns an!</p>
            <h2><Link href="tel:+495414444040">+49541 4444040</Link></h2>
        </div>
    );
};

export default Contact;