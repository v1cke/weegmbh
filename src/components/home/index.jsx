import React from "react";
import BannerArea from "./banner-area";
import ServicesArea from "./services-area";
import HelpCtaArea from "./help-cta-area";
import AboutUs from "./about-us";
import AccordionArea from "./accordion-area";
import TeamAreaSection from "./team-area-section";
import BrandAreaSection from "./brand-area-section";
import GalleryAreaSection from "./gallery-area-section";
import FunfactArea from "./funfact-area";

const index = () => {
  return (
    <main>
      <BannerArea />
      <ServicesArea />
      <HelpCtaArea />
      <TeamAreaSection />
      <BrandAreaSection />
      <AboutUs />
      {/* <GalleryAreaSection /> */}
      {/* <FunfactArea /> */}
      <AccordionArea />
    </main>
  );
};

export default index;
