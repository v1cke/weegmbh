import React from 'react';
import carreBg from '@assets/img/career/karriere.jpg';
import Link from 'next/link';

const CarrerCta = () => {
    return (
        <section className="career-cta-area pt-120 pb-120" style={{ backgroundImage: `url(${carreBg.src})` }}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="career-cta-inner d-flex justify-content-lg-end">
                            <div className="career-cta-wrapper">
                                <div className="career-cta-content">
                                    <h3>Du suchst einen Job?</h3>
                                    <p>Wenn für dich aktuell kein passender Job dabei ist, du aber gerne bei uns und in der Eisenbahn-Branche arbeiten möchtest, dann bewerbe dich doch gerne initiativ und wir schauen, ob wir etwas passendes für dich finden!</p>
                                    <Link className="job-btn" href="/contact">jetzt bewerben</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarrerCta;